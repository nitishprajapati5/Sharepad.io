import {useMutation, useQuery} from "@tanstack/react-query"
import { getCodeId } from "./api"
import { useRouter } from "next/navigation"

export function useSlug(){
    return useMutation({
        mutationFn:() => getCodeId()
    })
}