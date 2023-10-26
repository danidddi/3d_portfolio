import { useState, useRef } from "react"
import { SectionWrapper } from "../../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { styles } from "../../styles";
import { EarthCanvas } from "./canvas/Earth";
import emailjs from '@emailjs/browser'



function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    emailjs.send('service_7kxu6yy',
      'template_tusivk9',
      {
        from_name: form.name,
        to_name: 'Daniil',
        from_email: form.email,
        to_email: 'piyugindanil@bk.ru',
        message: form.message
      },
      'ftrGvOOjxBMvx6IRR'
    ).then(() => {
      setLoading(false);
      alert('Спасибо! Я свяжусь с Вами так быстро, как возможно.')

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error: Error) => {
      setLoading(false)
      console.log(error);
      alert('Что-то пошло не так.')
    });

  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Легко связаться</p>
        <h3 className={styles.heroHeadText}>Контакты.</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >

          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Ваше имя</span>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Как Ваше имя?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
              name="name" />
          </label>

          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Ваш электронный ящик</span>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Какой адрес Вашего электронного ящика?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
              name="email" />
          </label>

          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Ваше сообщение</span>
            <textarea
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="Что Вы хотите сказать?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium"
              name="message" />
          </label>

          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Отправква...' : 'Отправить'}
          </button>
        </form>

      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');