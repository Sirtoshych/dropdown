import {createContext} from "react";
import {ITag} from "../components/Tag/Tag";

export const TagsContext = createContext<{ tags: Array<ITag>, setTags: (tags: Array<ITag>) => void }>({
    tags: [],
    setTags: () => {
    }
});

export default TagsContext;