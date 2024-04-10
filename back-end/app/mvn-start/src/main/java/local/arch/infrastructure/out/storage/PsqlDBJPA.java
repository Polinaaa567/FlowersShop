package local.arch.infrastructure.out.storage;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import jakarta.transaction.UserTransaction;
import local.arch.application.IStorage;
import local.arch.infrastructure.out.storage.model.EFlowers;
import local.arch.infrastructure.out.storage.model.EOrders2;
import local.arch.infrastructure.out.storage.model.EPersons;

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
        Logger.getLogger("мьлвьылвмьыв").info("Мы зашли в метод");

        Logger.getLogger("мьлвьылвмьыв").info(login);
        Logger.getLogger("мьлвьылвмьыв").info(flowers);

        for (Integer flowerId : flowerIds) {
            TypedQuery<EFlowers> querys = entityManager
                    .createQuery(
                            "SELECT f FROM EFlowers f where f.id =:id",
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
        Logger.getLogger("мьлвьылвмьыв").info("Мы вышли из метода");
        return true;
    }

    @Override
    @Transactional
    public String HistoryOrder(String login) {

        TypedQuery<EOrders2> query = entityManager
                .createQuery(
                        "SELECT o FROM EOrders2 o Inner JOIN o.flowers fl where o.person_login =:login",
                        EOrders2.class);
        query.setParameter("login", login);
        List<EOrders2> orders = query.getResultList();
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
        for (EOrders2 o : orders) {
            Logger.getLogger("мьлвьылвмьыв").info("" + o.getDateComplete());
        }
        String jsonResult = "";
        try {
            jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(orders);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonResult;
    }

    @Override
    @Transactional
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
    public String UserInfo(String login) {
        TypedQuery<Object[]> personInfo = entityManager
                .createQuery("SELECT p.first_name, p.last_name FROM EPersons p WHERE p.login = :login", Object[].class);
        personInfo.setParameter("login", login);
        try {
            Object[] result = personInfo.getSingleResult();
            String name = (String) result[0];
            String lastname = (String) result[1];
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonResult = "";
            try {
                Map<String, String> resultMap = new HashMap<>();
                resultMap.put("name", name);
                resultMap.put("lastname", lastname);
                jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(resultMap);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            return jsonResult;
        } catch (NoResultException e) {
            return "Информация не найдена";
        }
    }

    @Override
    public String getFlowers() {
        List<EFlowers> flowers = entityManager.createQuery("SELECT p FROM EFlowers p", EFlowers.class).getResultList();
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResult = "";
        try {
            jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(flowers);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonResult;
    }

    @Override
    public String getPersons() {
        List<EPersons> persons = entityManager.createQuery("SELECT p.login FROM EPersons p", EPersons.class)
                .getResultList();
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResult = "";
        try {
            jsonResult = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(persons);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonResult;
    }
}
