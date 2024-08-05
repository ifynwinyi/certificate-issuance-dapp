<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Decentralized Certificate Issuance dApp</h3>

  <p align="center">
    A dApp for educational institutions to issue and verify certificates on the blockchain.
  </p>
</div>

## About
<p>
    This decentralized application (dApp) allows educational institutions to issue certificates, verify their authenticity, and enable employers to verify these certificates securely using blockchain technology.
</p>

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

* [docker](https://docs.docker.com/get-docker/)

* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.

0.x/getting-started/installation/)

* [cartesi-machine](https://docs.cartesi.io/cartesi-machine/0.13.x/getting-started/installation/)

### Local Setup
* Clone the repo
```sh
git clone https://github.com/<your_github_username>/certificate-dapp.git
```
* Change directory into the project folder and install the dependencies
```sh
cd certificate-dapp
yarn install
```

* Ensure that Docker is running and start the Cartesi environment
```sh
docker-compose up
```

* In another terminal, run the dApp
```sh
cartesi rollups server run
```

### Usage

* To create an institution
```sh
yarn create-institution
```
* To get all institutions
```sh
yarn get-all-institutions
```
* To issue a certificate
```sh
yarn issue-certificate
```
* To verify a certificate
```sh
yarn verify-certificate
```

### Contact
For any questions, feel free to reach out to me at [victor@example.com](mailto:victor@example.com).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
