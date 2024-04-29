package local.arch.infrastructure.builder;

import jakarta.enterprise.inject.Default;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;
import local.arch.application.api.Executable;
import local.arch.application.api.IService;
import local.arch.application.api.IStorage;
import local.arch.application.api.IStorageUsing;
import local.arch.application.api.TokenManagerInjection;
import local.arch.application.api.Updatable;
import local.arch.infrastructure.token.ITokenKey;

public class Builder {
    @Inject
    @Produce
    private IStorage storage;

    @Inject
    @Default
    private IService service;

    @Inject
    @Default
    private ITokenKey tokenKey;

    @Inject
    @Default
    private Executable executor;

    @Inject
    @Default
    private Updatable updater;

    @Produces
    @Built
    public IService buildService() {
        ((IStorageUsing) service).useStorage(storage);
        ((TokenManagerInjection) service).injectTokenManager(tokenKey);
        service.setExecutor(executor);
        service.setUpdater(updater);
        return service;
    }
}