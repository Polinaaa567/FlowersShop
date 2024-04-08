package local.arch.infrastructure.token;

import java.util.Map;

import local.arch.application.IStorage;

public interface ITokenKey {
    public String generateToken(String login, String passwd);

    public Map<String, String> getTokenInfo(String token);

    public void useStorage(IStorage storage);

    public boolean validateToken(String token);
}
