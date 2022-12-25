import { GridContainer } from '../../home.styles';
import { SingleUser } from './single-user';

export const UserList = ({users}: {users: any[]}) => {

  return (
    <GridContainer>
          {users.map((user:any) => {
      return <SingleUser key={user.id} user={user} />;
    })}
  </GridContainer>
  )
}
