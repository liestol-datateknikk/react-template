/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
// import emailjs from "emailjs-com";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
export const Contact = (props: any) => {
  const [success, setSuccess] = useState(false);
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });
  
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(name, email, message);
    
  //   {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
  //   // emailjs
  //   //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
  //   //   .then(
  //   //     (result) => {
  //   //       console.log(result.text);
  //   //       clearState();
  //   //     },
  //   //     (error) => {
  //   //       console.log(error.text);
  //   //     }
  //   //   );
  // };
  return (
    <div>
      <div id="contact" className="pt-24 pb-52 gap-20 mx-auto max-w-[1170px] flex flex-col-reverse sm:flex-row justify-between px-5 sm:px-0">
        <div>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl">Ta kontakt!</h2>
              <div className="h-1 bg-foreground w-16 my-3.5" />
              <p>
                Vennligst fyll ut skjemaet nedenfor for å sende oss en e-post, så vil vi
                kontakte deg så snart som mulig.
              </p>
            </div>
            <div className="flex flex-col gap-5 py-16">
              <div className="flex flex-col sm:flex-row gap-5">
                <Input
                  size="md" 
                  label="Navn" 
                  radius="sm" 
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Input 
                  size="md" 
                  radius="sm"
                  label="Epost" 
                  variant="bordered"
                  labelPlacement="outside"
                />
              </div>
              <Textarea
                label="Beskjed"
                radius="sm"
                size="md"
                minRows={8}
                maxRows={8}
                variant="bordered"
                labelPlacement="outside"
              />
            </div>
            <Button
              variant={success ? 'solid' : 'bordered'}
              radius="sm"
              color={success ? 'success' : 'default'}
              onClick={() => setSuccess(!success)}
            >
              Send
            </Button>

        </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-normal pb-11">Kontaktinfo</h3>
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="cil:location-pin"></Icon>
                <p>Adresse</p>
              </div>
              <p className="text-sm opacity-85">{props.data ? props.data.address : "loading"}</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="ic:baseline-phone"></Icon>
                <p>Telefon</p>
              </div>
              <a className="text-sm opacity-85" href={`tel:${props.data.phone}`}>{props.data ? props.data.phone : "loading"}</a>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="ic:baseline-email"></Icon>
                <p>Epost</p>
              </div>
              <a className="text-sm opacity-85" href={`mailto:${props.data.email}`}>{props.data ? props.data.email : "loading"}</a>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      <div id="footer" className="pb-10">
        <div className="text-center">
          <p>
            &copy; 2023 BBL
          </p>
        </div>
      </div>
    </div>
  );
};