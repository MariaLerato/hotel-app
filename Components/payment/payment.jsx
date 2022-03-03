import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-native-datepicker';

const PaymentMethod = ({ navigation, route }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date())
  const [cvv, setCvv] = useState('')
  const [payment, setPayment] = useState([])

  const { hotelname, Totalprice, Roomname, Guestnumber, dateIn, dateOut, roomNo, location, image, roomId } = route.params

  console.log(Totalprice)
  const NewMethod = () => {
    setPayment([...payment, {
      id: payment.length + 1,
      email: email,
      name: name,
      date: date,
      cvv: cvv
    }])
    alert('Details Saved')

  }
  const Validate = Yup.object({
 
    email:Yup.string().email('Please Enter The Correct Format').required('Required'),
    name: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    cvv: Yup.string().required('Required')
  })

  return (
    <>
      <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <View style={Styles.header}>
          <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
          <Text style={Styles.textHead}>Payment Details</Text>

        </View>
        <Formik
          initialValues={{
            number: '',
            name: '',
            date: '',
            cvv: ''
          }}
          onSubmit={(values) =>{NewMethod(values.email,values.name,values.cvv,values.date);
             navigation.navigate('paymentmethod', {
         email:values.email,
        name:values.name,
        date:values.date,
        cvv:values.cvv,
        roomPrice:Totalprice,
        guests:Guestnumber,
        Room:Roomname,
        hotelname:hotelname,
        dateIn:dateIn,
        dateOut:dateOut,
        rooms:roomNo,
        location:location,
        hotelImage:image,
        roomId:roomId
          })}}
        validateOnMount={true}
        validationSchema={Validate}
           >
        {({ errors, handleChange, handleSubmit, handleBlur, touched, values }) => (
          <View>
            <View style={{ marginTop: '20%' }}>
              <Input
                placeholder={'Card Number'}
                leftIcon={<Icon name={'cc-mastercard'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.number}
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
              />
              {errors.number && touched.number ? (
                <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.number}</Text>
              ) : null}
              <Input
                placeholder={'Card Holder'}
                leftIcon={<Icon name={'user'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {errors.name && touched.name ? (
                <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.name}</Text>
              ) : null}
              <DatePicker
                style={Styles.picker}
                date={values.date}
                mode='date'
                placeholder='Expiry Date'
                format='MM/YY'
                // minDate={'12/2022'}
                // maxDate={'12/2023'}
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: '-45%',
                    backgroundColor: '#ffffff',
                    borderColor: '#ffffff'
                  }
                }
                }
                onDateChange={handleChange('date')}
              />
              {errors.date && touched.date ? (
                <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.date}</Text>
              ) : null}
              <Input
                placeholder={'CVV'}
                leftIcon={<Icon name={'credit-card'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.cvv}
                onChangeText={handleChange('cvv')}
                onBlur={handleBlur('cvv')}
              />
              {errors.cvv && touched.cvv ? (
                <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.cvv}</Text>
              ) : null}

            </View>
            <TouchableOpacity style={{ width: '80%', height: 65, borderColor: '#61B0A2', borderWidth: 4, borderRadius: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '10%' }} onPress={handleSubmit}><Text style={{ color: '#61B0A2', fontSize: 24 }}>Save</Text></TouchableOpacity>
          </View>
        )}
      </Formik>

    </View>
        </>
    )
}
const Styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    marginTop: '10%',
  },
  textHead: {
    color: '#1C5248',
    fontSize: 28,
    paddingLeft: '10%',
    fontWeight: '600',
    marginTop: '-2%'

  },
  textbox: {
    margin: '2%',
    backgroundColor: '#FFFFFF',

  },
  picker: {
    width: 350,
    // backgroundColor: '#FFFFFF',
    margin: '1%',
    marginLeft: '3%',
    marginBottom: '2%',
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    fontSize: 25,

  },
})
export default PaymentMethod