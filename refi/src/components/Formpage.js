import React from 'react'
import { Identity } from "@semaphore-protocol/identity";
import { Group } from "@semaphore-protocol/group";
import { generateProof, verifyProof } from "@semaphore-protocol/proof";
import { useEffect, useState } from "react";
import { Web3Storage } from 'web3.storage'
import emailjs from '@emailjs/browser';
import abi from './abiNFT.json'
import {ethers} from 'ethers'
import './formPage.css'

const Formpage = () => {
  // const form = useRef();
  const [proof, setProof] = useState({})
  const [identity, setIdentity] = useState({})
  const [otp, setOTP] = useState("4565");
  const [enableProof, setEnableProof] = useState(true)
  const [otpEntered, setOTPEntered] = useState("");
  const mapping = {
    "gmail": 1,
    "rediffmail": 2,
    "amazon": 3
  }
  const [company, setCompany] = useState("");
  function generateOTP()
  {
    var digits = '0123456789';
    var otpLength = 4;
    var otp = '';

    for(let i=1; i<=otpLength; i++)
    {
        var index = Math.floor(Math.random()*(digits.length));
        otp = otp + digits[index];
    }
    console.log(otp)
    setOTP(otp)
    // return otp;
  }

  function SendEmail(e) {
    // generateOTP();
    console.log("xd")
    console.log(e.target)
    emailjs.sendForm('service_qs6r9hn', 'template_8cszf4g', e.target, 'FyXljqncqlhl0jdSS')
    console.log("success")
    // emailjs.sendForm('service_qs6r9hn', 'template_8cszf4g', form.current, 'FyXljqncqlhl0jdSS')
    console.log("OTP Sen:", otp)
    // const sendEmail = (e) => {
    //   console.log("here")
    //   e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
    //   emailjs.sendForm('service_qs6r9hn', 'template_8cszf4g', form.current, 'FyXljqncqlhl0jdSS')
    //   .then((result) => {
    //       console.log("success")
    //   }, (error) => {
    //       console.log("error")
    //   });
    // };
    // sendEmail();
  }


  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  let allGroups = []
  const addWhistleBlower = async (e) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const group = new Group(grpId, 30);

        console.log("adding the member..");
        const identity = new Identity("secret-msg"); //change the secret message
        setIdentity(identity);
        console.log(identity);

        // let id = mapping[company] //change this company to the one extracted from mailID
        // allGroups[id -1].addMember(identity.commitment);
        // console.log("member added");

        // console.log("adding the member..");
        // const identity = new Identity("secret-msg");
        // console.log(identity);
        group.addMember(identity.commitment);
        console.log("member added");

        console.log("Generating the proof...");
        const externalNullifier = group.root;
        // const externalNullifier = allGroups[id -1].root;
        const signal = 1;
        // debugger;
        const fullProof = await generateProof(
          // { trapdoor, nullifier, commitment },
          identity,
          group,
          // allGroups[id -1],
          externalNullifier,
          signal
        );
        console.log("proof generated", fullProof);
        setProof(fullProof);
        console.log("verifying...");
        await verifyProof(fullProof, 30);
        console.log("VERIFIED")


      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [grpId, setGrpId] = useState(1)
  const createGroup = async (e) => {
    try {
      const { ethereum } = window;
      console.log("here")
      console.log(currentAccount)
      if (ethereum) {
        console.log("Got here")
        if(currentAccount === "0x9e9725400681c01e1c1e5678020b3d54d568d842")
        {
          console.log("hereeee")
          const group = new Group(grpId, 30);
          console.log("Group created:", group);
          setGrpId(grpId + 1)
          allGroups.push(group)
        }

       
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const [id, setId] = useState("");
  

  function makeStorageClient () {
    return new Web3Storage({ 
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYwNWVCMGJhNzJjQmFkN2EzMWJiRjVjYmZjNjA1OThBOTIyYTcxNTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk1OTE5NzI0OTAsIm5hbWUiOiJSZUZJIn0.m5czTgVxKY_Royy3_9dFmi4hmc5TRHugxovpAMSfWA4"
    })
  }


  function getFiles () {
    const fileInput = document.querySelector('input[type="file"]')
    return fileInput.files
  }

  async function storeFiles () {
    const client = makeStorageClient()
    const cid = await client.put(getFiles())
    console.log('stored files with cid:', cid)
    return cid
  }


  async function retrieveFiles(cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
    console.log(res)
  }

  function getdomain(inp_string)
  {
    var my_email=inp_string
    var ind=my_email.indexOf("@");
    var my_slice=my_email.slice((ind+1),my_email.length);
    var new_ind = my_slice.indexOf(".");
    var fin_slice = my_slice.slice(0,new_ind);
    return fin_slice;
  }
  
  
  function handleChange(e) {
    setCompany(getdomain(e.target.value));
    console.log(getdomain(e.target.value))
  }
  function handleOTPChange(e) {
    setOTPEntered(e.target.value)
    console.log(getdomain(e.target.value))
  }

  function verifyOTP(e) {
    console.log(e.target.value)
    if(otpEntered === "1234") 
    {
      console.log("OTP VERIFIED")
      setEnableProof(false)
    }
  }
  async function mintNFT(e) {
    // const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    const contractAddress = "0x0A1994c6c0719D95727A70Bac8F5E12186Bb5Ea0";
    const contractABI = abi;
    try {
      const { ethereum } = window;
      console.log("here")
      console.log(currentAccount)
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);
        await nftContract.mint(currentAccount);
       console.log("NFT Minted")
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
       <div className="Form">
      <div className="c1">
        <button onClick={connectWallet} className="btn btn-primary">Connect Wallet</button>
      </div>  
      <div className="c2">
        <button onClick={createGroup} className="btn btn-primary">Create Group</button>
      </div>  
      <div className="c3">
        <button onClick={addWhistleBlower} disabled={enableProof} className="btn btn-primary">Add WhistleBlower</button> 
      </div>  
      {/* <h3>Your id is {id}</h3> */}
      {/* <button onClick={generateProofVerify}>Verify Proof</button> */}
      <div className="c4">
        
      <input type="file" id="myFile" name="filename"/>
      <button type="submit" onClick={storeFiles} className="btn btn-primary">Store</button>
      </div>  
      {/* <button onClick={() => retrieveFiles("bafybeibiuaekbxougoa4xb6ovd5tv4irggmaacc4i2xx5ocrhfbu623fzq")}>View Reports</button>
      <input id="getFile"></input> */}
      <div className="c5">
        
        
      <form onSubmit={SendEmail}>
        {/* <label >Name</label>
        <input type="text" name="user_name"/> */}
        <label>Email</label>
        <input type="email" name="user_email" onChange={handleChange}/>
        {/* <label>Message</label>
        <textarea name="message" /> */}
        <input type="submit" />
      </form>
      </div>  
      <div className="c6">
        
      <label>Enter OTP:</label>
      <input type="text" onChange={handleOTPChange}></input>
      <button type="submit" onClick={verifyOTP} className="btn btn-primary">Verify OTP</button>
      </div>
      <div className="c7">

      <button type="submit" onClick={mintNFT} className="btn btn-primary">Mint NFT</button>
      </div>
    </div>
    </>
  )
}

export default Formpage
