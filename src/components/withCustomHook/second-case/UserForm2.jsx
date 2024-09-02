import useInput from '../hooks/useInput';

const UserForm2 = () => {

	// UTILIZIAMO HOOK CREATO IN PRECEDENZA PASSANDO COME VALORE PREDEFINITO UNA STRINGA VUOTA 
  const [valueFirstName, bindFirstName, resetFirstName] = useInput("")
	const [valueLastName, bindLastName, resetLastName] = useInput("")

	const submitHandler = (e) => {
		e.preventDefault()
		alert(`Ciao sono ${valueFirstName} ${valueLastName}`)
		resetFirstName()
		resetLastName()
	}

  return (
    <div>
      <form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<input type="text" value={valueFirstName} onChange={(e) => bindFirstName.onChange(e.target.value)}/>
				</div>
				<div>
					<label>Last Name</label>
					<input type="text" value={valueLastName} onChange={(e) => bindLastName.onChange(e.target.value)}/>
				</div>
				<button>Submit</button>
			</form>
    </div>
  )
}

export default UserForm2
