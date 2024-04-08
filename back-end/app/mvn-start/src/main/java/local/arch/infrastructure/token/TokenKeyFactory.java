package local.arch.infrastructure.token;

interface ITokenKeyFactory {
    public ITokenKey createInstance();
}

public class TokenKeyFactory implements ITokenKeyFactory {
    @Override
    public ITokenKey createInstance() {
        return new TokenKey();
    }
}
