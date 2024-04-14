package local.arch.application.dto;

public class Flowers {
    private Integer id;
    private String title;
    private String image_path;
    private String description;
    private Integer price;

    // public Flowers(Integer id, String title, String image_path, String description, Integer price) {
    //     this.id = id;
    //     this.title = title;
    //     this.image_path = image_path;
    //     this.description = description;
    //     this.price = price;
    // }

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
