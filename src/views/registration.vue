<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2>Регистрация</h2>
      <h3>Основная информация</h3>
      <hr>

      <div class="cont">
        <label> Имя*: </label>
        <input
            type="text"
            v-model="firstname"
            :class="{invalid:($v.firstname.$dirty && !$v.firstname.required)||
                             ($v.firstname.$dirty && !$v.firstname.minLength)||
                             ($v.firstname.$dirty && !$v.firstname.alpha)}"
        >

        <small v-if="$v.firstname.$dirty && !$v.firstname.required"> Поле не должно быть пустым </small>
        <small v-else-if="$v.firstname.$dirty && !$v.firstname.minLength"> Слишком короткое имя </small>
        <small v-else-if="$v.firstname.$dirty && !$v.firstname.alpha">Поле должно содержать только латинские буквы </small>

      </div>
      <div class="cont">
        <label> Фамилия*:</label>
        <input
            type="text"
            v-model="lastname"
            :class="{invalid:($v.lastname.$dirty && !$v.lastname.required)||
                             ($v.lastname.$dirty && !$v.lastname.minLength)||
                             ($v.lastname.$dirty && !$v.lastname.alpha)}"
        >
        <small v-if="$v.lastname.$dirty && !$v.lastname.required">Поле не должно быть пустым</small>
        <small v-else-if="$v.lastname.$dirty && !$v.lastname.minLength"> Слишком короткая Фамилия</small>
        <small v-else-if="$v.lastname.$dirty && !$v.lastname.alpha" >Поле должно содержать только латинские буквы</small>
      </div>
      <div class="cont">
        <label> Отчество:</label>
        <input type="text"
               v-model="threename"
               :class="{invalid:($v.threename.required || !$v.threename.alpha )}"
        >
        <small v-if="$v.threename.required ||!$v.threename.alpha">Поле должно содержать только латинские буквы </small>
      </div>
      <div class="cont">
        <label> Дата рождения*: </label>
        <input
            type="date"
            id="data"
            v-model="date"
            :class="{invalid:($v.date.$dirty && !$v.date.required)}"
        >
        <small v-if="$v.date.$dirty && !$v.date.required">Заполните дату</small>
      </div>
      <div class="cont">
        <label>Номер телефона(в формате 7xxxxxxxxxx)*: </label>
        <input
            type="tel" name="tel"
            maxlength="11"
            value="7"
            v-model="telephone"
            :class="{invalid:($v.telephone.$dirty && !$v.telephone.required)||
                             ($v.telephone.$dirty && !$v.telephone.numeric)||
                             ($v.telephone.$dirty && !$v.telephone.minLength)}"
        >
        <small v-if="$v.telephone.$dirty && !$v.telephone.required">Поле не должно быть пустым</small>
        <small v-else-if="$v.telephone.$dirty && !$v.telephone.numeric">Неверный формат</small>
        <small v-else-if="$v.telephone.$dirty && !$v.telephone.minLength">Недостаточно цифр</small>
      </div>
      <div class="cont2"><label> Пол:
        <input type="radio" name="sex" value="rad2">М
        <input type="radio" name="sex" value="rad2">Ж</label>
      </div>

      <div class="cont">
        <label>Группа клиентов*: </label>
        <select
            size="3"
            multiple name="group clients[]"
            id="multi"
            v-model="groupClients"
            :class="{invalid:($v.groupClients.$dirty && !$v.groupClients.required)}"
        >
          <option value="VIP">VIP</option>
          <option value="problem">Проблемные </option>
          <option value="oms">ОМС</option>
        </select>
        <small v-if="$v.groupClients.$dirty && !$v.groupClients.required">Выбор группы обязателен</small>
      </div>

      <div class="cont">
        <label >Лечащий врач:</label>
        <select size="1">
          <option value="doctor1">Иванов</option>
          <option value="doctor2">Захаров </option>
          <option value="doctor3">Чернышева</option>
        </select>
      </div>


      <div class="cont2">
        <label> <input type="checkbox"> Не отправлять СМС </label>
      </div>


      <h3>Адрес</h3>
      <hr>
      <div class="cont">
        <label> Индекс:</label>
        <input
            type="text"
            v-model="index"
            :class="{invalid:($v.index.required || !$v.index.numeric )&&
                             (!$v.index.maxLength && $v.index.minLength|| $v.index.required ) }"
        >
        <small v-if="$v.index.required || !$v.index.numeric">Поле только для цифр</small>
        <small v-else-if="!$v.index.maxLength || $v.index.required ">Индекс должен быть 6 символов</small>
        <small v-else-if=" !$v.index.minLength|| $v.index.required ">Индекс должен быть 6 символов</small>

      </div>
      <div class="cont">
        <label> Страна:</label>
        <input
            type="text"
            v-model="country"
            :class="{invalid:($v.country.required || !$v.country.alpha )}"
        >

        <small v-if="$v.country.required || !$v.country.alpha">Поле должно содержать только латинские буквы</small>
      </div>
      <div class="cont">
        <label> Область:</label>
        <input
            type="text"
            v-model="region"
            :class="{invalid:($v.region.required || !$v.region.alpha )}"
        >
        <small  v-if="$v.region.required || !$v.region.alpha">Поле должно содержать только латинские буквы</small>
      </div>
      <div class="cont">
        <label> Город*:</label>
        <input
            type="text"
            v-model="city"
            :class="{invalid:($v.city.$dirty && !$v.city.required)||
                              ($v.city.$dirty&&!$v.city.alpha)}"
        >
        <small  v-if="$v.city.$dirty && !$v.city.required">Поле не должно быть пустым</small>
        <small v-else-if="$v.city.$dirty&&!$v.city.alpha">Поле должно содержать только латинские буквы</small>
      </div>
      <div class="cont">
        <label> Улица:</label> <input type="text">
      </div>
      <div class="cont">
        <label> Дом:</label>
        <input type="text">
      </div>

      <h3>Документы</h3>
      <hr>
      <div class="cont">
        <label>Тип:</label>
        <select size="1"
                v-model="passport"
                :class="{invalid:($v.passport.$dirty && !$v.passport.required)}"
        >
          <option selected value="document1">Паспорт</option>
          <option  value="document2">Свидетельство о рождении </option>
          <option value="document3">Вод. удостоверение</option>
        </select>
        <small v-if="$v.passport.$dirty && !$v.passport.required">Выбор документа обязателен</small>
      </div>
      <div class="cont">
        <label> Серия:</label>
        <input type="text">
      </div>
      <div class="cont">
        <label> Номер:</label>
        <input type="text">
      </div>
      <div class="cont">
        <label> Кем выдан:</label>
        <input type="text">
      </div>
      <div class="cont">
        <label> Дата выдачи:</label>
        <input type="date"
               v-model="passportDate"
               :class="{invalid:($v.passportDate.$dirty && !$v.passportDate.required)}"
        >
        <small v-if="$v.passportDate.$dirty && !$v.passportDate.required">Заполните дату</small>
      </div>


      <button type="submit">Регистрация</button>
    </form>
  </div>
</template>

<script>
import {alpha,required, minLength, maxLength,numeric} from 'vuelidate/lib/validators'


export default {
  name: 'reg',
  data:()=>({
    firstname:'',
    lastname:'',
    threename:'',
    date:'',
    telephone:'',
    groupClients:[],
    index:'',
    country:'',
    region:'',
    city:'',
    passport:[],
    passportDate:'',




}),
  validations:{

    firstname:{
      required,
      minLength:minLength(2),
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    lastname: {
      required,
      minLength:minLength(2),
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    threename:{
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    date:{
      required,

    },
    telephone:{
      required,
      numeric:val => /^7[0-9]*$/i.test(val),
      minLength:minLength(11),
    },
    groupClients:{
      required
    },
    index:{
      maxLength:maxLength(6),
      minLength:minLength(6),
      numeric
    },
    country: {
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    region:{
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    city:{
      required,
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    passport:{
      required
    },
    passportDate:{
      required
    }

  },

  components: {

  },
  methods:{
    onSubmit(){
       if(this.$v.$invalid){
       this.$v.$touch()
       return
      }
      this.$router.push('/success')
    }
  }
}
</script>

<style lang="scss">

$iback:#fdecd7;

body{
  background: antiquewhite;
  select{
    font-size: large;
  }
}
input{
  margin: 0 auto;
}
small{
  margin-left: 55px;
  color:red;
}
label{
  margin-left: 55px;
  margin-bottom: 5px;
}
form{
  font-family: Tahoma, sans-serif;
  font-size: large;
  border-radius: 10px;
  box-shadow:0 0 10px black;
  margin: 0 auto;
  width: 60%;
  background: #dea05085;
}
.cont{
  input{
    border-color: transparent;
    width: 50%;
    height: 25px;
    border-radius: 10px;
    margin-left: 55px;

  }
  select{
    margin-left: 55px;
    border-radius: 10px;
    height: 25px;


  }
  #multi{
    height: 75px;
  }

  margin: 10px;
  padding: 2px;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;

}
input:focus{
  background: $iback;
  border-radius: 10px;


  //transition-delay: 0.5s;
}
input:hover{
  cursor: pointer;
  background: $iback;
}
#data{
  width: 140px;

}
.cont2{
  margin: 10px;
  padding: 2px;
  display: flex;


}

h2,h3{
  padding:10px 2px 4px 30px;
}



button{
  margin: 25px;
  border-radius: 5px;
  height: 35px;
  box-shadow: 2px 3px 5px #00000094;
  font-size: large;
}

button:hover{
  cursor: pointer;
  background: #ad8d65;
}
</style>