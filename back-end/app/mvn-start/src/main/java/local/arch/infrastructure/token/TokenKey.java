package local.arch.infrastructure.token;

import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import io.jsonwebtoken.Jwts;
import jakarta.inject.Inject;
import local.arch.application.api.IStorage;
import local.arch.infrastructure.builder.Produce;

public class TokenKey implements ITokenKey {
    @Inject
    @Produce
    IStorage storage;

    public static final byte[] secretBytes = "SVDSUHUGVGEURRHDSVCHJSBKSDBNCJKVHDSHJSDVNDJSVNDSJKVLSVDSKVSDKVMKSDVSDLDKJHCNSKAJNASJCBDSVHCDGUIEEHG"
            .getBytes();
    public static final SecretKey secretKey = new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256");

    @Override
    public String generateToken(String username, String passwd) {
        return Jwts.builder().subject(username).claim("password", passwd).signWith(secretKey).compact();
    }

    @Override
    public Map<String, String> getTokenInfo(String token) {
        String username = (String) Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
                .get("sub");
        String passwd = (String) Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload()
                .get("password");

        Map<String, String> map = new HashMap<>();
        map.put("login", username);
        map.put("password", passwd);

        return map;
    }

    @Override
    public boolean validateToken(String token) {
        Map<String, String> tokenInfo = this.getTokenInfo(token);

        return this.storage.findUser(tokenInfo.get("login"), tokenInfo.get("password"));
    }

    @Override
    public boolean validate(String token) {
        Map<String, String> tokenInfo = this.getTokenInfo(token);
        String newToken = generateToken(tokenInfo.get("login"), tokenInfo.get("password"));
        return newToken.equals(token);
    }

    @Override
    public void useStorage(IStorage storage) {
        this.storage = storage;
    }
}
