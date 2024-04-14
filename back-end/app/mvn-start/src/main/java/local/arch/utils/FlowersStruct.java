package local.arch.utils;

import java.util.ArrayList;
import java.util.List;

import local.arch.application.dto.Flowers;
import local.arch.infrastructure.out.storage.model.EFlowers;

public class FlowersStruct {
    public static List<Flowers> toFlowersList(List<EFlowers> eFlowers) {
        List<Flowers> flowers = new ArrayList<>();
        for (EFlowers eFlower : eFlowers) {
            Flowers flower = toFlowers(eFlower);
            flowers.add(flower);
        }
        return flowers;
    }

    public static Flowers toFlowers(EFlowers eflower) {
        try {
            Flowers flower = new Flowers();
            flower.setFlowerID(eflower.getFlowerID());
            flower.setDescription(eflower.getDescription());
            flower.setImage_path(eflower.getImage_path());
            flower.setPrice(eflower.getPrice());
            flower.setTitle(eflower.getTitle());
            return flower;
        } catch (Exception e) {
            return null;
        }
    }

    public static EFlowers toEFlowers(Flowers flower) {
        try {
            EFlowers eflower = new EFlowers();
            eflower.setFlowerID(flower.getFlowerID());
            eflower.setDescription(flower.getDescription());
            eflower.setImage_path(flower.getImage_path());
            eflower.setPrice(flower.getPrice());
            eflower.setTitle(flower.getTitle());
            return eflower;
        } catch (Exception e) {
            return null;
        }
    }
}