import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <Layout>
      <div className="font-bold flex justify-center text-5xl p-6 bg-gray-900 text-white">
        유저 목록
      </div>
      {users.map((ele) => {
        return (
          <div key={ele.id} className=" m-5 p-3 border-2 max-w-[500px]">
            <ul>
              <li className="text-2xl font-bold my-2">{ele.name}</li>
              <li>아이디 : {ele.username}</li>
              <li>email : {ele.email}</li>
              <li>전화번호 : {ele.phone}</li>
              <li>직장 : {ele.company.name}</li>
              <li>
                <a href={`https://${ele.website}`}>웹사이트 : {ele.website}</a>
              </li>
            </ul>
          </div>
        );
      })}
      <div></div>
    </Layout>
  );
}
