package local.arch.application.service;

import java.sql.Timestamp;
import java.util.List;

import local.arch.application.IService;
import local.arch.application.IStorage;
import local.arch.application.IStorageUsing;
import local.arch.application.dto.Flowers;
import local.arch.application.dto.Orders;
import local.arch.application.dto.Persons;
import local.arch.domain.Factory;
import local.arch.domain.ICalculator;
import local.arch.infrastructure.token.ITokenKey;

public class Service implements IService, IStorageUsing, TokenManagerInjection {

  ITokenKey usedManager;
  IStorage storage;

  @Override
  public double order(double result, double number, String symbol) {
    ICalculator calculator = Factory.createCalculator();
    result = calculator.calculate(result, number, symbol);
    return result;
  }

  @Override
  public String checkUser(String login, String password) {
    String token = this.usedManager.generateToken(login, password);
    return this.usedManager.validateToken(token) ? token : "BAD";
  }

  public String newUser(String login, String password, String first_name, String last_name) {
    this.storage.RegistrationUser(login, password, first_name, last_name);
    String token = this.usedManager.generateToken(login, password);

    return this.usedManager.validateToken(token) ? token : "BAD";
  }

  @Override
  public List<Flowers> listFlowers() {
    return storage.getFlowers();
  }

  @Override
  public List<Persons> listPersons() {
    return storage.getPersons();
  }

  public boolean newOrder(String login, String flowers, Integer cost, Timestamp DateCompleted) {
    boolean result = storage.SaveNewOrder(login, flowers, cost, DateCompleted);
    return result;
  }

  public List<Orders> listOrder(String login) {
    return storage.HistoryOrder(login);
  }

  @Override
  public void useStorage(IStorage storage) {
    this.storage = storage;
  }

  @Override
  public void injectTokenManager(ITokenKey manager) {
    usedManager = manager;
  }

  @Override
  public Persons getUserInfo(String login) {
    return storage.UserInfo(login);
  }
}