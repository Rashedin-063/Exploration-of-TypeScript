
type BasicPropsType = {
  type: 'basic';
  name: string;
}

type AdvPropsType = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicPropsType | AdvPropsType;



function Component(props: ProfileCardProps) {

  const { type, name } = props;
  
  if (type === 'basic') {
    return (
      <article
        className='alert alert-success'
      >
        <h2>Type: {type}</h2>
        <h2>Name: {name}</h2>
      </article>
    );
  }
  return (
    <article className={`alert alert-danger`}>
      <h2>Type: {type}</h2>
      <h2>Name: {name}</h2>
     <h2>Email: {props.email}</h2>
    </article>
  );
}
export default Component;
