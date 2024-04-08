package local.arch.application;

import local.arch.application.service.Service;

public class Factory {
	public static IService createService() {
		return new Service();
	}
}