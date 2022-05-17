import FormAtt from "../../components/FormAttendants/FormAtt";
import Columm from "../../components/UI/Columm/Columm";
import ContainerHome from "../../components/UI/ContainerHome/ContainerHome";
import Header from "../../components/UI/Header/Header";
import "./styles.css";

const Attendants = ({
  users,
  name,
  email,
  setName,
  setEmail,
  deleteUser,
  createUser
}) => {
  return (
    <>
      <ContainerHome>
        <Header title="Atendentes"></Header>

        <div className="attendants-container">
          <div className="tabUser-header">
            <div id="idHeader">ID</div>
            <div>NOME</div>
            <div>E-MAIL</div>
            <div>TIPO</div>
            <div style={{ marginLeft: "2%", width: "10%" }}></div>
          </div>
          {users.map((user) => {
            return (
              <div key={user.id} className="tabeUser-row">
                <div id="id">{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>Padrão</div>
                <button onClick={() => deleteUser(user.id)}>Excluir</button>
              </div>
            );
          })}
        </div>
      </ContainerHome>
      <Columm>
        <FormAtt
          name={name}
          email={email}
          createUser={createUser}
          setName={setName}
          setEmail={setEmail}
        />
      </Columm>
    </>
  );
};

export default Attendants;
