'use client'

import { useEffect, useState } from 'react';
import { ServiceTitle } from '../services/page';
import './contact.scss';

const FormInput = ({
  title,
  height="3rem",
  onChange=() => {},
  rows
}: {
  title: string, 
  height?: string, 
  onChange: (text: string) => void,
  rows?: number
}) => {

  const [text, updateText] = useState<string>('');

  // State for the debounced value (updates after a pause in typing)
  // const [debouncedValue, setDebouncedValue] = useState('');

  // Handle the immediate change as the user types
  const handleOnChange = (event: any) => {
    updateText(event.target.value)
  };

  // Use useEffect to manage the timeout logic
  useEffect(() => {
    // Set a timeout to update the debounced value after a delay
    const timeoutId = setTimeout(() => {
      // setDebouncedValue(text);
      onChange(text)
    }, 500); // 500ms delay

    // Cleanup function: this runs if the inputValue changes again before the timeout finishes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]); // Re-run this effect only when inputValue changes

  return (
    <div className="input-wrapper">
      <h3>{title}</h3>
      <textarea 
        value={text} 
        onChange={handleOnChange} 
        style={{
          height: height,
          lineHeight: rows === 1 ? '3rem' : '1.5rem'
          }}/>
    </div>
  )
}

type Form = {
  nome: string,
  email: string,
  razao: string,
  mensagem: string
}

const EMPTY_FORM: Form = {
  nome: '',
  email: '',
  razao: '',
  mensagem: ''
}

export default function About() {

  const [form, updateForm] = useState<Form>(EMPTY_FORM)

  const handleSend = () => {
    // Send an email
    console.log('Enviando formulário:', form);
  }

  return (
    <div className="contact-page">
      <ServiceTitle
        title='Fale conosco'
        description='Descreva sua necessidade e nosso time de especialistas entrará em contato assim que passar por nossa avaliação'
      />
      <FormInput title='Nome' onChange={(text) => {updateForm({...form, nome: text})}} rows={1}/>
      <FormInput title='E-mail' onChange={(text) => {updateForm({...form, email: text})}} rows={1}/>
      <FormInput title='Razão do contato' onChange={(text) => {updateForm({...form, razao: text})}} rows={1}/>
      <FormInput 
        title='Descreva sua necessidade' 
        height='15rem' 
        onChange={(text: string) => {updateForm({...form, mensagem: text})}}/>
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
