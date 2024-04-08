package local.arch.infrastructure.out.storage.model;

import java.io.Serializable;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"persons\"")
public class EPersons implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "persons_id_seq")
    @SequenceGenerator(name = "persons_id_seq", sequenceName = "persons_id_seq", initialValue = 1, allocationSize = 1)
    @Column(name = "\"id\"")
    private Integer PersonsID;

    @Column(name = "\"login\"")
    private String login;

    @Column(name = "\"password\"")
    private String password;

    @Column(name = "\"role\"")
    private String role;

    @Column(name = "\"created_at\"")
    private Timestamp created_at;

    @Column(name = "\"first_name\"")
    private String first_name;

    @Column(name = "\"last_name\"")
    private String last_name;

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
