package local.arch.infrastructure.builder;

import jakarta.enterprise.inject.Default;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;
import local.arch.application.IService;
import local.arch.application.IStorage;
import local.arch.application.IStorageUsing;
import local.arch.application.service.TokenManagerInjection;
import local.arch.infrastructure.token.ITokenKey;

public class Builder {
    @Inject
    IStorage storage;

    @Inject
    @Default
    IService service;

    @Inject
    @Default
    ITokenKey tokenKey;

    @Produces
    @Built
    public IService buildService() {
        ((IStorageUsing) service).useStorage(storage);
        ((TokenManagerInjection) service).injectTokenManager(tokenKey);

        return service;
    }
}