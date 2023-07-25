import * as yup from 'yup';
const passwordRules=/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;

export const registerShema=yup.object().shape({
    firstName:yup.string().required('Zorunlu alan').min(3,'İsim 3 karakterden az olamaz'),
    lastName:yup.string().required('Zorunlu alan').min(3,'Soyisim 3 karakterden az olamaz'),
    email:yup.string().email('Geçerli bir e-posta giriniz').required('Zorunlu alan'),
    password:yup.string().min(4,'Parola en az 4 karakter içermelidir').required('Zorunlu alan').matches(passwordRules,{
        message:'Lütfen en az 1 büyük harf 1 küçük harf 1 sayı içermelidir.'
    }),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor ').required('Zorunlu alan')

})