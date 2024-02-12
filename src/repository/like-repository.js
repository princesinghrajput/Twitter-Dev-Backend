import Like from "../models/like";
import CrdudRepository from "./crud-repository";

class LikeRepository extends CrdudRepository {
    constructor() {
        super(Like);
    }

}

export default LikeRepository;