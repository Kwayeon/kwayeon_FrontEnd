import { useQuery } from "@tanstack/react-query";

import { useMsgMutation } from "@/hooks/useMsgMutation";

import { Button } from "antd";

export default function Test() {
  const { data: test } = useQuery<any[]>({
    queryKey: ["/user"],
  });

  const { mutate: createTest } = useMsgMutation({
    url: "/user/register",
    method: "post",
    refetchUrl: "/user",
  });

  const { mutate: updateTest } = useMsgMutation({
    url: "/user/10",
    method: "patch",
    refetchUrl: "/user",
  });

  return (
    <div>
      <h1>Test</h1>

      {test?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.password}</p>
        </div>
      ))}

      <Button
        type="primary"
        onClick={() =>
          createTest({
            email: "test1",
            password: "test1",
            name: "test1",
            phone: "test1",
          })
        }
      >
        Create
      </Button>

      <Button
        type="primary"
        onClick={async () => {
          const data = await updateTest({
            name: "test0",
          });
        }}
      >
        Update
      </Button>
    </div>
  );
}
