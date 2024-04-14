package local.arch.utils;

import java.util.ArrayList;
import java.util.List;

import local.arch.application.dto.Persons;
import local.arch.infrastructure.out.storage.model.EPersons;

public class UserStruct {
    public static List<Persons> toPersonsList(List<EPersons> ePersons) {
        List<Persons> persons = new ArrayList<>();
        for (EPersons e : ePersons) {
            Persons person = toPersons(e);
            persons.add(person);
        }
        return persons;
    }

    public static Persons toPersons(EPersons eperson) {
        try {
            Persons person = new Persons();
            person.setPersonsID(eperson.getPersonsID());
            person.setCreated_at(eperson.getCreated_at());
            person.setFirst_name(eperson.getFirst_name());
            person.setLast_name(eperson.getLast_name());
            person.setLogin(eperson.getLogin());
            person.setPassword(eperson.getPassword());
            person.setRole(eperson.getRole());
            return person;
        } catch (Exception e) {
            return null;
        }
    }

    public static EPersons toEPersons(Persons person) {
        try {
            EPersons eperson = new EPersons();
            eperson.setPersonsID(person.getPersonsID());
            eperson.setCreated_at(person.getCreated_at());
            eperson.setFirst_name(person.getFirst_name());
            eperson.setLast_name(person.getLast_name());
            eperson.setLogin(person.getLogin());
            eperson.setPassword(person.getPassword());
            eperson.setRole(person.getRole());
            return eperson;
        } catch (Exception e) {
            return null;
        }
    }
    
}
