import {useState} from "react";

const Contacts = () => {
    const [form, setForm] = useState({name: '', email: '', subject: '',  message: ''});

    return (
        <section id='contact' className='contacts'>
            <div className="contacts__map-outer">
                <div className="contacts__gmap-canvas">
                    <iframe width="100%"
                            height="100%"
                            title='openstreetmap'
                            src="https://www.openstreetmap.org/export/embed.html?bbox=30.505728721618656%2C50.43417888604363%2C30.53405284881592%2C50.44612300977156&amp;layer=mapnik"
                    ></iframe>
                </div>
            </div>

            <div className='wrapper contacts__wrapper'>
                <div className='contacts__box'>
                    <h2 className='headline contacts__headline'>Contact</h2>
                    <form method='post'
                          action='/'
                    >
                        <fieldset className='contacts__group'>
                            <label htmlFor='name'
                                   className='visually-hidden'
                            >Your name</label>
                            <input id='name'
                                   className='contacts__input'
                                   type='text'
                                   placeholder='Your name'
                                   value={form.name}
                                   onChange={(e) => setForm({...form, name: e.target.value})}
                            ></input>
                            <label htmlFor='email'
                                   className='visually-hidden'
                            >Your email</label>
                            <input id='email'
                                   className='contacts__input'
                                   type='email'
                                   placeholder='Your email'
                                   value={form.email}
                                   onChange={(e) => setForm({...form, email: e.target.value})}
                            ></input>
                            <label htmlFor='subject'
                                   className='visually-hidden'
                            >Subject</label>
                            <input id='subject'
                                   className='contacts__input'
                                   type='text'
                                   placeholder='Subject'
                                   value={form.subject}
                                   onChange={(e) => setForm({...form, subject: e.target.value})}
                            ></input>
                            <label htmlFor='message'
                                   className='visually-hidden'
                            >Message</label>
                            <textarea id='message'
                                      className='contacts__input contacts__input--textarea'
                                      placeholder='Message'
                                      value={form.message}
                                      onChange={(e) => setForm({...form, message: e.target.value})}
                            ></textarea>
                        </fieldset>
                        <button className='button button--gray contacts__button'
                                type='submit'
                        >Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts;