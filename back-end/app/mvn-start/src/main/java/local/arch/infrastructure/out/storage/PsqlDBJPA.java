package local.arch.infrastructure.out.storage;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import jakarta.transaction.UserTransaction;
import local.arch.application.IStorage;
import local.arch.application.dto.Flowers;
import local.arch.application.dto.Orders;
import local.arch.application.dto.Persons;
import local.arch.infrastructure.out.storage.model.EFlowers;
import local.arch.infrastructure.out.storage.model.EOrders2;
import local.arch.infrastructure.out.storage.model.EPersons;
import local.arch.utils.FlowersStruct;
import local.arch.utils.OrdersStruct;
import local.arch.utils.UserStruct;

public class PsqlDBJPA implements IStorage {

    @Resource
    private UserTransaction userTransaction;

    @PersistenceContext(unitName = "FlowerShop")
    private EntityManager entityManager;

    @Override
    @Transactional
    public boolean SaveNewOrder(String login, String flowers, Integer cost, Timestamp DateCompleted) {

        List<Integer> flowerIds = Arrays.stream(flowers.split(","))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        for (Integer flowerId : flowerIds) {
            TypedQuery<EFlowers> querys = entityManager.createQuery("SELECT f FROM EFlowers f where f.id =:id",
                    EFlowers.class);
            querys.setParameter("id", flowerId);
            EFlowers orders = querys.getSingleResult();
            EOrders2 order = new EOrders2();
            order.setPersonLogin(login);
            order.setFlowers(orders);
            order.setCost(cost);
            LocalDateTime localDateTime = LocalDateTime.now();
            Timestamp timestamp = Timestamp.valueOf(localDateTime);
            order.setCreated_at(timestamp);
            order.setDateComplete(DateCompleted);
            entityManager.persist(order);
        }
        return true;
    }

    @Override
    @Transactional
    public List<Orders> HistoryOrder(String login) {

        TypedQuery<EOrders2> query = entityManager
                .createQuery(
                        "SELECT o FROM EOrders2 o Inner JOIN o.flowers fl where o.person_login =:login",
                        EOrders2.class);
        query.setParameter("login", login);
        List<EOrders2> orders = query.getResultList();
        List<Orders> ord = OrdersStruct.toOrder(orders);
        return ord;
    }

    @Override
    @Transactional()
    public boolean RegistrationUser(String login, String password, String first_name, String last_name) {
        TypedQuery<EPersons> query = entityManager.createQuery("SELECT p FROM EPersons p where p.login =:login",
                EPersons.class);
        query.setParameter("login", login);

        try {
            EPersons person = query.getSingleResult();
            if (person != null) {
                return false;
            }
        } catch (NoResultException e) {
            EPersons persons = new EPersons();
            persons.setLogin(login);
            persons.setPassword(password);
            persons.setRole("Users");
            persons.setFirst_name(first_name);
            persons.setLast_name(last_name);
            LocalDateTime localDateTime = LocalDateTime.now();
            Timestamp timestamp = Timestamp.valueOf(localDateTime);

            persons.setCreated_at(timestamp);
            entityManager.persist(persons);
            return true;
        }
        return false;
    }

    @Override
    public boolean findUser(String login, String password) {

        TypedQuery<EPersons> query = entityManager
                .createQuery("select u from EPersons u where u.login=:login AND u.password=:password", EPersons.class);
        query.setParameter("password", password);
        query.setParameter("login", login);
        try {
            EPersons user = query.getSingleResult();
            return user != null;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Persons UserInfo(String login) {
        TypedQuery<Object[]> personInfo = entityManager
                .createQuery("SELECT p.last_name, p.first_name FROM EPersons p WHERE p.login = :login", Object[].class);
        personInfo.setParameter("login", login);
        Object[] result = null;
        try {
            result = personInfo.getSingleResult();
        } catch (Exception e) {
            System.out.println(e);
        }

        Persons person = new Persons();
        person.setLast_name((String) result[0]);
        person.setFirst_name((String) result[1]);

        return person;
    }

    @Override
    public List<Flowers> getFlowers() {
        List<EFlowers> flowers = entityManager.createQuery("SELECT p FROM EFlowers p", EFlowers.class).getResultList();
        List<Flowers> flower = FlowersStruct.toFlowersList(flowers);
        return flower;
    }

    // декомпозировать весь файл
    @Override
    public List<Persons> getPersons() {
        List<EPersons> persons = entityManager.createQuery("SELECT p FROM EPersons p", EPersons.class).getResultList();
        List<Persons> result = UserStruct.toPersonsList(persons);
        return result;
    }
}
