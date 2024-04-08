package local.arch.application.service;

import local.arch.infrastructure.token.ITokenKey;

public interface TokenManagerInjection {
    public void injectTokenManager(ITokenKey manager);
}
