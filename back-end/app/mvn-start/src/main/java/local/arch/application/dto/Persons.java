package local.arch.application.dto;

import java.sql.Timestamp;

public class Persons {
    private Integer PersonsID;
    private String login;
    private String password;
    private String role;
    private Timestamp created_at;
    private String first_name;
    private String last_name;

    // public Persons(Integer PersonsID, String login, String password, String role, Timestamp created_at, String first_name, String last_name) {
    //     this.PersonsID = PersonsID;
    //     this.login = login;
    //     this.password = password;
    //     this.role = role;
    //     this.created_at = created_at;
    //     this.first_name = first_name;
    //     this.last_name = last_name;
    // }

    public Integer getPersonsID() {
        return this.PersonsID;
    }

    public void setPersonsID(Integer pID) {
        this.PersonsID = pID;
    }

    public String getLogin() {
        return this.login;
    }

    public void setLogin(String pLogin) {
        this.login = pLogin;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String pPassword) {
        this.password = pPassword;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String pRole) {
        this.role = pRole;
    }

    public Timestamp getCreated_at() {
        return this.created_at;
    }

    public void setCreated_at(Timestamp pCreated_at) {
        this.created_at = pCreated_at;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String pFirst_name) {
        this.first_name = pFirst_name;
    }

    public String getLast_name() {
        return this.last_name;
    }

    public void setLast_name(String pLast_name) {
        this.last_name = pLast_name;
    }
}
