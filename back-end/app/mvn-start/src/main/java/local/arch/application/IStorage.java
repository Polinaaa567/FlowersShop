package local.arch.application;

import java.sql.Timestamp;

public interface IStorage {
	public boolean findUser(String login, String password);

	public boolean RegistrationUser(String login, String password, String first_name, String last_name);

	public String getFlowers();

	public String getPersons();

	public boolean SaveNewOrder(String login, String flowers, Integer cost, Timestamp DateCompleted);

	public String HistoryOrder(String login);

	public String UserInfo(String login);
}
