package local.arch.infrastructure.out.storage.executor;

import java.util.logging.Logger;

import jakarta.annotation.Resource;
import jakarta.enterprise.concurrent.ManagedExecutorService;
import local.arch.application.api.Executable;

public class Executor implements Executable {

    @Resource
    private ManagedExecutorService mes;

    @Override
    public void execute(Runnable thread) {
        Logger.getLogger("Executor ИНФА 100%").info("Ошибка есть нет?");

        mes.execute(thread);
    }
}
