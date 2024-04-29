package local.arch.application.api;

import local.arch.infrastructure.token.ITokenKey;

public interface TokenManagerInjection {
    public void injectTokenManager(ITokenKey manager);
}
