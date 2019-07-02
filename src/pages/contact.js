
// import React from "react";
// import styled from "styled-components";
// import "./normalize.css";
// import Layout from "../templates/layout";
// import GeneralForm from "../components/GeneralForm";
// import ProjectForm from "../components/ProjectForm";



// class Contact extends React.Component {
//     constructor(props) {
//       super(props);
//       this.showGenForm = this.showGenForm.bind(this);
//       this.hideGenForm = this.hideGenForm.bind(this);
//       this.showProjectForm = this.showProjectForm.bind(this);
//       this.hideProjectForm = this.hideProjectForm.bind(this);
  
//       this.state = {
//         genFormOpen: false,
//         proFormOpen: false
//       };
//     }
  
//     showGenForm() {
//       //if other form is open, close it first
//       if (this.state.proFormOpen) {
//         this.setState({
//           proFormOpen: false
//         });
//       }
//       this.setState({
//         genFormOpen: true
//       });
//     }
//     hideGenForm() {
//       this.setState({
//         genFormOpen: false
//       });
//     }
  
//     showProjectForm() {
//       if (this.state.genFormOpen) {
//         this.setState({
//           genFormOpen: false
//         });
//       }
//       this.setState({
//         proFormOpen: true
//       });
//     }
//     hideProjectForm() {
//       this.setState({
//         proFormOpen: false
//       });
//     }
  
//     render() {
//       return (
//         <Layout
//           pageTitle="Contact - "
//           headline="Let's chat"
//           className="contactPage"
//           backgroundIsBlack={false}
//         >
//           <Body>
//             <FormsHeader>
//               <FormH2>I can't wait to hear from you!</FormH2>
//               <FormH3>So, what do you need?</FormH3>
//               <FormBtnContainer>
//                 <FormButton
//                   id="genBtn"
//                   onClick={
//                     this.state.genFormOpen ? this.hideGenForm : this.showGenForm
//                   }
//                 >
//                   Question or Comment
//                 </FormButton>
//                 <FormButton
//                   id="protBtn"
//                   onClick={
//                     this.state.proFormOpen
//                       ? this.hideProjectForm
//                       : this.showProjectForm
//                   }
//                 >
//                   I need a website built!
//                 </FormButton>
//               </FormBtnContainer>
//             </FormsHeader>
//             <GeneralForm open={this.state.genFormOpen} />
//             <ProjectForm open={this.state.proFormOpen} />
//           </Body>
//         </Layout>
//       );
//     }
//   }
//   export default Contact;

