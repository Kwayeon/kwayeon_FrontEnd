import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { AxiosRequestConfig } from "axios";

import { message } from "antd";

import { instance, client } from "../apis/instance";

interface UseMsgMutationProps
  extends Pick<UseMutationOptions, "onSuccess">,
    Omit<AxiosRequestConfig, "data"> {
  refetchUrl?: string;
}

export const useMsgMutation = ({ onSuccess, refetchUrl, ...axiosConfig }: UseMsgMutationProps) => {
  return useMutation(
    (payload: any): Promise<any> => {
      return instance({
        ...axiosConfig,
        data: payload,
      });
    },
    {
      onSuccess: (...args) => {
        if (refetchUrl) client.invalidateQueries({ queryKey: [refetchUrl] });

        message.success("Success");

        onSuccess?.(...args);
      },

      onError: (...args) => {
        message.error((args[0] as any).response.data.message);
      },
    }
  );
};
