import React, { useState } from 'react'
import { Button1, Button2 } from '../../components/button'
import { Input1, Lable } from '../../components/input'
import Table from '../table/table'
import './style.css'

function ReceiptDetails() {

  const [date, setDate] = useState('')
  const [amount, setAmount] = useState("")
  const [paymentMode, setPaymentMode] = useState('Cash')
  const [remark, setReamark] = useState('')

  const [errorMessage, setErrorMessage] = useState({
    date: '',
    amount: ''
  })

  const [tableData, setTableData] = useState([]);

  const validateForm = () => {
    let copyErrorMessages = {...errorMessage}
    let valid = true;
    if (date.trim()) {
    copyErrorMessages.date = '';
    }
    else {
      valid = false;
      copyErrorMessages.date ='This field is required.'
    }
  
    if (amount.trim()) {
     
      copyErrorMessages.amount = '';
    }
    else {
      valid = false;
      copyErrorMessages.amount ='This field is required.'
    }
    setErrorMessage({
      ...copyErrorMessages
    })
    valid && onSave()
  }

  const onSave = () => {

    let copyData = [...tableData];
    copyData.push({
      date,
      amount,
      paymentMode,
      remark
    })

    setTableData(copyData)
    setTimeout(() => {
      clearData()
    }, 250);
  }

  const clearData = () => {
    setDate('')
    setAmount('')
    setPaymentMode('Cash')
    setReamark('')
  }
  console.log(tableData)
  return (
    <div className='main'>
      <div>
        <div className='container' >
          <h4 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Receipt Details</h4>
          <form>
            <div className='form_element'>
              <Lable required title='Date' />
              <Input1  className = "dateInput"  placeholder='Enter date' type={'date'} 
                onChange={(e) => {
                  setErrorMessage({
                    ...errorMessage,
                    date :''
                  })
                  setDate(e.target.value)}}
                value={date}
                errorMessage={errorMessage.date}
              />
            </div>
            <div className='form_element'>
              <Lable required title='Amount' />
              <Input1 placeholder='Entere Amount (in INR)' type={'number'}
               min={'1'} maxLength={'10'}
                onChange={(e) => {
                  setErrorMessage({
                    ...errorMessage,
                    amount :''
                  })
                  setAmount(e.target.value)}}
                value={amount}
                errorMessage = {errorMessage.amount}
              />
            </div>
            <div className='form_element'>
              <Lable required title='Payment Mode' />
              <select
                onChange={(e) => setPaymentMode(e.target.value)}
                value={paymentMode}
              >
                <option>Cash</option>
                <option>Online</option>
              </select>
            </div>
            <div className='form_element'>
              <Lable title='Remark' />
              <Input1 placeholder='Enter Remark'
                value={remark}
                onChange={(e) => setReamark(e.target.value)} />
            </div>
            <div className='submit_bar'>
              <Button2 title='CANCEL' onClick={() => clearData()}/>
              <Button1 title='SUBMIT' onClick={() => validateForm()} />
            </div>


          </form>
        </div>
      </div>

      <Table data={tableData} />
    </div>
  )
}

export default ReceiptDetails