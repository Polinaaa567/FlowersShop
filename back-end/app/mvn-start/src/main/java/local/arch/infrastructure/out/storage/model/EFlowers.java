package local.arch.infrastructure.out.storage.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"flowers\"")
public class EFlowers implements Serializable {
    @Id
    @Column(name = "\"id\"")
    private Integer id;

    @Column(name = "\"title\"")
    private String title;

    @Column(name = "\"image_path\"")
    private String image_path;

    @Column(name = "\"description\"")
    private String description;

    @Column(name = "\"price\"")
    private Integer price;

    public Integer getFlowerID() {
        return this.id;
    }

    public void setFlowerID(Integer pID) {
        this.id = pID;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String pTitle) {
        this.title = pTitle;
    }

    public String getImage_path() {
        return this.image_path;
    }

    public void setImage_path(String pImage_path) {
        this.image_path = pImage_path;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String pDescription) {
        this.description = pDescription;
    }

    public Integer getPrice() {
        return this.price;
    }

    public void setPrice(Integer pPrice) {
        this.price = pPrice;
    }
}
