package local.arch.application;

import java.sql.Timestamp;

public interface IService {
	public double order(double result, double number, String symbol);

	public String listOrder(String login);

	public boolean newOrder(String login, String flowers, Integer cost, Timestamp DateCompleted);

	public String checkUser(String login, String password);

	public String listFlowers();

	public String listPersons();

	public String getUserInfo(String token);

	public String newUser(String login, String password, String first_name, String last_name);
}
