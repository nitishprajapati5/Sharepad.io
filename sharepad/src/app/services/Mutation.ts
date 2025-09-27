import {useMutation} from "@tanstack/react-query"
import { getCodeId } from "./api"

export function useSlug(){
    return useMutation({
        mutationFn:() => getCodeId(),
    
    })
}