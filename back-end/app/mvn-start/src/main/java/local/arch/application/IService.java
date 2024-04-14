package local.arch.application;

import java.sql.Timestamp;
import java.util.List;

import local.arch.application.dto.Flowers;
import local.arch.application.dto.Orders;
import local.arch.application.dto.Persons;

public interface IService {
	public double order(double result, double number, String symbol);

	public List<Orders> listOrder(String login);

	public boolean newOrder(String login, String flowers, Integer cost, Timestamp DateCompleted);

	public String checkUser(String login, String password);

	public List<Flowers> listFlowers();

	public List<Persons> listPersons();

	public Persons getUserInfo(String token);

	public String newUser(String login, String password, String first_name, String last_name);
}
