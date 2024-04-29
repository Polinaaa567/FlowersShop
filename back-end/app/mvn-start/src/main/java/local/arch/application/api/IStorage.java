package local.arch.application.api;

import java.sql.Timestamp;
import java.util.List;

import local.arch.application.dto.Flowers;
import local.arch.application.dto.Orders;
import local.arch.application.dto.Persons;

public interface IStorage {
	public boolean findUser(String login, String password);

	public boolean RegistrationUser(String login, String password, String first_name, String last_name);

	public List<Flowers> getFlowers(); // массив данных, методы и классы сущности

	public List<Persons> getPersons();

	public boolean SaveNewOrder(String login, String flowers, Integer cost, Timestamp DateCompleted);

	public List<Orders> HistoryOrder(String login);

	public Persons UserInfo(String login);
}
