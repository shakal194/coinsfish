import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Header />
      <section className="terms py-[72px] lg:py-[150px]">
        <div className="container mx-auto w-full max-w-[1356px] p-0">
          <div className="mt-6">
            <h1 className="text-3xl font-bold">
              <b>Terms of Use</b>
            </h1>
            <p className="mt-2">Last Updated Fab 24, 2024</p>
            <div className="mt-4">
              <p>
                <b>
                  Please read these Terms of Use (hereinafter – the "Terms")
                  carefully before using any services,
                </b>
                provided by <b>COINS.FISH LTD (hereinafter – the "Company"),</b>{' '}
                a legal entity incorporated under the laws of Antigua and
                Barbuda, including but not limited to{' '}
                <Link href="/" className="font-bold text-blue-500">
                  https://coins.fish
                </Link>{' '}
                website (hereinafter – the "Website") and mobile application
                ("App").
              </p>
              <p className="mt-4">
                If you do not agree with these Terms, you may not access or use
                the Website or any Services provided on the Website. All
                information and Services provided on the Website are provided on
                a strictly "as-is" basis without any warranty whatsoever.
              </p>
              <p className="mt-4">
                Please leave the Website and do not create an account if you do
                not agree with the terms and conditions laid down below.
                Otherwise, you take all risks and responsibility for holding and
                dealing in Virtual Currency, though we have warned you.
              </p>
              <div className="mt-4">
                <ol className="list-inside list-decimal">
                  <li className="mt-8">
                    <span className="font-bold">
                      <b>Terms and Definitions</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        1.1. <b>Account</b> – a account opened by you on the
                        Website to access Services on the Website.
                      </li>
                      <li className="mt-4">
                        1.2. <b>AML Policy</b> – rules of conduct aimed at the
                        prevention of money laundering and terrorism financing,
                        developed by the Company in accordance with the
                        Regulatory Law, which construes an integral part of the
                        Terms and can be accessed at{' '}
                        <Link href="/" className="font-bold text-blue-500">
                          https://coins.fish
                        </Link>
                        .
                      </li>
                      <li className="mt-4">
                        1.3. <b>Regulatory Law</b> – laws of Antigua and
                        Barbuda, international regulations and agreements,
                        applicable under these Terms to any and all relations
                        between you and the Company.
                      </li>
                      <li className="mt-4">
                        1.4. <b>Coins.fish</b> (also referred to as the
                        "Platform") – an online platform, operated by the
                        Company, that offers Foreign exchange dealing, Money
                        transferring, Dealing in virtual currencies and other
                        services, laid down in Section 3 of the Terms.
                      </li>
                      <li className="mt-4">
                        1.5. <b>Deposit</b> – a transaction, which involves the
                        transfer of units of Virtual Currency from external
                        wallets to your Account.
                      </li>
                      <li className="mt-4">
                        1.6. <b>Exchange</b> – exchange transaction of a Virtual
                        Currency to fiat currency or vice versa, or of Virtual
                        Currency to another Virtual Currency conducted through
                        the Account.
                      </li>
                      <li className="mt-4">
                        1.7. <b>Exchange Rate</b> – correlation of value between
                        assets in trading pairs, based on assets' demand,
                        supply, value, utility, and other economic variables.
                      </li>
                      <li className="mt-4">
                        1.8. <b>Fee</b> – commission or other costs, charged by
                        the Company for the use of Services.
                      </li>
                      <li className="mt-4">
                        1.9. <b>Privacy Policy</b> – rules of personal data
                        collection, storage, and use, developed by the Company
                        in accordance with the Regulatory Law, which construes
                        and integral part of the Terms and can be accessed at{' '}
                        <Link
                          href="/privacy"
                          className="font-bold text-blue-500"
                        >
                          https://coins.fish/privacy
                        </Link>
                      </li>
                      <li className="mt-4">
                        1.10. <b>Services</b> – any services, provided on the
                        Platform by the Company, laid down in Section 3 of the
                        Terms.
                      </li>
                      <li className="mt-4">
                        1.11. <b>User</b> (also referred to as "You", "Your") –
                        an individual (a physical person) or a legal entity,
                        incorporated in an appropriate legal form, that has
                        opened an Account on the Website, who has the capacity
                        to enter into a legally binding contract and use the
                        Website, and is not prohibited to do so and use the
                        Services by the Regulatory Law or any other laws that
                        may apply.
                      </li>
                      <li className="mt-4">
                        1.12. <b>Virtual Currency</b> – decentralized
                        peer-to-peer digital asset, that has no central issuer
                        and is not legal tender, is not securities, e-money, or
                        money under the Regulatory Law.
                      </li>
                      <li className="mt-4">
                        1.13. <b>Virtual Currency Merchant</b> – a third-party
                        provider of goods and/or services, that supports
                        payments in Virtual Currencies through the User's
                        Account on the Platform.
                      </li>
                      <li className="mt-4">
                        1.14. <b>Website</b> – an Internet website, maintained
                        and owned by the Company at{' '}
                        <Link href="/" className="font-bold text-blue-500">
                          https://coins.fish
                        </Link>
                        .
                      </li>
                      <li className="mt-4">
                        1.15. <b>Withdrawal</b> – a transaction, which involves
                        the transfer of the units of Virtual Currency from your
                        Account to external wallets.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span className="font-bold">
                      <b>Terms of Use Status and Acceptance</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        2.1. These Terms constitute a legally binding agreement
                        between you and the Company.
                      </li>
                      <li className="mt-4">
                        2.2. These Terms apply to any and all Services,
                        information, texts, and other products, offered on the
                        Website by the Company.
                      </li>
                      <li className="mt-4">
                        2.3. By accessing the Website, opening an Account on the
                        Website, or ticking the "I agree to the Terms of Use and
                        Privacy Policy" checkbox, you agree to be bound by these
                        Terms and confirm that you have read, understood, and
                        accepted all the provisions of these Terms, as well as
                        provisions of our Privacy Policy, AML Policy, and other
                        legally binding document publicly available on the
                        Website.
                      </li>
                      <li className="mt-4">
                        2.4. You cannot use the Website and create the Account
                        if you have not read, understood, and accepted all the
                        provisions of these Terms.
                      </li>
                      <li className="mt-4">
                        2.5. The Company may change, remove, or add the context
                        of the Terms and reserves the right to do so in its sole
                        discretion. All new and/or revised provisions of the
                        Terms take effect immediately and apply to your use of
                        the Website, the Account and the Services from that date
                        on. Please, check these Terms regularly to be aware of
                        all current provisions of these Terms.
                      </li>
                      <li className="mt-4">
                        2.6. The Company has the right to notify you of
                        significant changes in these Terms. This can be done by
                        posting a notification on the Website or sending you an
                        e-mail (if appropriate).
                      </li>
                      <li className="mt-4">
                        2.7. You can review the most current version of the
                        Terms using the Terms of Use link. If you continue to
                        use the Website after the Company makes changes to the
                        Terms, you expressly confirm your acceptance of the new
                        and/or revised Terms.
                      </li>
                      <li className="mt-4">
                        2.8. These Terms, including our Privacy Policy and the
                        AML Policy, any and all notices, notifications,
                        policies, warnings and disclaimers constitute entire
                        agreement between you and the Company.
                      </li>
                      <li className="mt-4">
                        2.9. Platform users assume full responsibility for all
                        risks associated with the use of cryptocurrencies. These
                        may include:
                        <ul className="ml-6 list-inside list-disc">
                          <li>Theft or loss due to negligence;</li>
                          <li>Lack of collateralisation of cryptocurrency;</li>
                          <li>Cyber security risks;</li>
                          <li>Virtual currency fraud;</li>
                          <li>Lack of consumer protection;</li>
                          <li>High volatility;</li>
                          <li>Currency regulation;</li>
                          <li>Taxation of virtual currencies.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Services</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        3.1. The Company provides the following services on the
                        Website (collectively – "Services", and separately – the
                        "Service"):
                        <ul className="ml-6 list-inside list-disc">
                          <li>
                            Exchange of Virtual Currency unit for units of
                            another Virtual Currency/fiat money;
                          </li>
                          <li>Virtual Currency wallet services; </li>
                          <li>
                            Depositing and withdrawing units of Virtual Currency
                            on the Platform;
                          </li>
                        </ul>
                      </li>
                      <li className="mt-4">
                        3.2. By providing a Service of exchanging Virtual
                        Currency units for units of another Virtual Currency or
                        fiat money, the Company uses then-prevailing spot market
                        exchange rate for the given trading pair (e.g. BTC/USD).
                        You further acknowledge and agree that whilst the prices
                        displayed on our Platform may take into account market
                        data from various sources, they are not taken directly
                        from any one source, and therefore may not match prices
                        that you see elsewhere (including prices quoted on other
                        exchanges, conversion services and market data
                        providers).
                      </li>
                      <li className="mt-4">
                        3.3. By providing a wallets Service, the Company
                        provides you with a digitally secured wallet for Virtual
                        Currencies, aimed to exchange, store, and withdraw units
                        of Virtual Currencies and securely stores your private
                        keys for these purposes.
                      </li>
                      <li className="mt-4">
                        3.4. Deposits and withdrawals are made in accordance
                        with Section 9 of the Terms.
                      </li>
                      <li className="mt-4">
                        3.5. The Company may at any time disable the access to
                        the Website, the Account and/or specific Service or all
                        Services altogether and reserves the right to do so in
                        its sole discretion without giving any reason.
                      </li>
                      <li className="mt-4">
                        3.6. The Company only offers Services regarding Virtual
                        Currencies the Platform supports. Please, check the
                        Website regularly to be aware of what Virtual Currencies
                        are supported. You should not attempt to use your
                        Account to deposit Virtual Currencies the Platform does
                        not support.
                      </li>
                      <li className="mt-4">
                        3.7. The provision of Services might be delayed due to
                        circumstances including but not limited to technical
                        difficulties, reasonable doubts about the nature or
                        source of funds, deposited on the Platform, carrying out
                        AML/KYC checks as set forth in the AML Policy, etc.
                      </li>
                      <li className="mt-4">
                        3.8. The Company may also provide you with an aggregated
                        nominal value of all your assets in EUR, BTC or any
                        other currency or Virtual Currency based on their
                        current exchange rate.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>User's Eligibility</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        4.1. To access the Services, you must open an Account on
                        the Website by undergoing a registration procedure on
                        the Website.
                      </li>
                      <li className="mt-4">
                        4.2. The Services and the use of the Website are
                        available to individuals or legal entities, that:
                        <ul className="ml-6 list-inside list-disc">
                          <li>
                            are at least 18 years of age (for individuals);
                          </li>
                          <li>
                            have the capacity to enter into a legally binding
                            contract and use the Website, and are not prohibited
                            to do so and use the Services by the Regulatory Law
                            or any other laws that may apply;{' '}
                          </li>
                          <li>
                            are residing or incorporated in countries and
                            territories we support.
                          </li>
                        </ul>
                      </li>
                      <li className="mt-4">
                        4.3. You can only have one Account on the Website. You
                        should not create more than one Account on the Website
                        unless expressly permitted by the Company.
                      </li>
                      <li className="mt-4">
                        4.4. You cannot create an Account on the Website if your
                        Account has previously been suspended by the Company.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Personal Account</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        5.1. When opening an Account on the Website, you warrant
                        that any and all information, submitted by you is
                        accurate, valid, up-to-date, and complete.
                      </li>
                      <li className="mt-4">
                        5.2. You shall not use your Account for illegal purposes
                        and activities, which may include but is not limited to
                        money laundering, terrorism financing, human, drug,
                        weapon, and sex trafficking, or tax evasion.
                      </li>
                      <li className="mt-4">
                        5.3. You must not create an Account on behalf of another
                        individual or entity unless you are legally authorized
                        to do so.
                      </li>
                      <li className="mt-4">
                        5.4. You are solely responsible for keeping your Account
                        secure. Do not share your login, password or any other
                        access details with others.
                      </li>
                      <li className="mt-4">
                        5.5. You must notify the Company immediately upon
                        becoming aware of any breach of security or unauthorized
                        use of your Account. Please contact us at{' '}
                        <Link
                          href="mailto:support@coins.fish"
                          className="font-bold text-blue-500"
                        >
                          support@coins.fish
                        </Link>{' '}
                        immediately in this case!
                      </li>
                      <li className="mt-4">
                        5.6. The Company reserves its right to suspend your
                        Account without providing notice or reason in case of
                        any violation of these Terms.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Registration Requirements</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        6.1. In order to receive access to the Services,
                        provided on the Website, you will have to provide
                        certain information and documents and undergo a
                        verification procedure. For more information, please,
                        read the AML Policy.
                      </li>
                      <li className="mt-4">
                        6.2. The Company may at any time request you to provide
                        additional documents and information and/or updated
                        documents and/or information and documents submitted
                        before and reserves the right to do so at its sole
                        discretion. Failure to abide by these requirements may
                        result in temporary or permanent cessation of Services
                        provision and/or Account suspension.
                      </li>
                      <li className="mt-4">
                        6.3. You are solely responsible for the accuracy,
                        validity, and correctness of all information and
                        documentation you submit to the Company. Should there be
                        any error, mistake, update, or change in information or
                        documents you have submitted prior, you are obliged to
                        notify the Company immediately.
                      </li>
                      <li className="mt-4">
                        6.4 Information and documents, submitted by you to the
                        Company are processed according to provisions of our
                        Privacy Policy.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>User Conduct</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        7.1 While visiting, accessing, using the Website and
                        Services, you agree to:
                        <ul className="ml-6 list-inside list-disc">
                          <li>
                            not violate or assist any third party in violating
                            these Terms and/or any Regulatory Law, which may
                            include but is not limited to international laws,
                            national laws, statutes, regulations, etc.;
                          </li>
                          <li>
                            not provide false, inaccurate, incomplete and
                            misleading information to the Company;
                          </li>
                          <li>
                            not violate intellectual property rights (trademark,
                            copyright, patent, and other intellectual property
                            rights) of the Company specified in paragraph 13 of
                            these Terms;
                          </li>
                          <li>
                            not use the Website in any way that can damage,
                            disable or overburden the Website, which may include
                            but is not limited to uploading or in any other way,
                            while using the Website, sending viruses, Trojan
                            horses, spyware, adware or any other malicious code;
                            performing DDoS attacks, interfering with or
                            disrupting any network, equipment, or server
                            connected to or used to provide services on the
                            Website;
                          </li>
                          <li>
                            not attempt to gain unauthorized access to the
                            Website, other Users' Accounts, computer systems or
                            networks connected to the Website or to extract data
                            from the Website;
                          </li>
                          <li>
                            not share your Account and/or password with third
                            parties or use any other person's Account and/or
                            password;
                          </li>
                          <li>
                            not impersonate or misrepresent your affiliation
                            with another User, person or entity, nor make other
                            fraudulent, false, deceptive, or misleading
                            representations;
                          </li>
                          <li>
                            not violate any laws that apply in your jurisdiction
                            concerning the use of Virtual Currency;
                          </li>
                          <li>
                            not violate these Terms and the Regulatory Law in
                            any other way.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Account Closing & Suspension</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        8.1. You can close your Account at any time at your sole
                        discretion.
                      </li>
                      <li className="mt-4">
                        8.2. Before closing your Account, all your assets have
                        to be withdrawn to external wallets.
                      </li>
                      <li className="mt-4">
                        8.3. The Company reserves the right to suspend your
                        Account in an event:
                        <ul className="ml-6 list-inside list-disc">
                          <li>
                            we reasonably believe your Account has been
                            compromised, as well as for any other security
                            reasons;
                          </li>
                          <li>
                            we reasonably believe your Account is being used by
                            a person with no right and/or authorization to do
                            so;
                          </li>
                          <li>
                            you fail to comply with these Terms, the AML Policy
                            and the Privacy Policy, as well as with any other
                            document that construes a part of these Terms;
                          </li>
                          <li>
                            you have provided us with any false, incomplete,
                            misleading, inaccurate information;
                          </li>
                          <li>
                            you, your Account, your behavior poses regulatory
                            risks to the Company;
                          </li>
                          <li>
                            we reasonably suspect you of fraud, violating the
                            Regulatory Law;
                          </li>
                          <li>
                            other reasons that constitute a violation of these
                            Terms and the Regulatory Law.
                          </li>
                        </ul>
                      </li>
                      <li className="mt-4">
                        8.4. The Company may, but is not obliged to, notify you
                        about the reasons for your Account suspension. Assets
                        from your Account may be blocked, without the right to
                        withdraw.
                      </li>
                      <li className="mt-4">
                        8.5. In an event of Account closing or suspension, you
                        will still be liable for all applicable Fees.
                      </li>
                      <li className="mt-4">
                        8.6. The Company is not liable for any losses suffered
                        due to your Account closure or suspension.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Deposits and Withdrawals</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        9.1. You can withdraw units of Virtual Currency at any
                        time at your sole discretion subject to Account
                        transaction limits and temporary or permanent
                        restrictions imposed in course of internal investigation
                        or by law (e.g. court orders).
                      </li>
                      <li className="mt-4">
                        9.2. You can withdraw your units of Virtual Currency in
                        any amount, provided there are enough Virtual Currency
                        units to cover the applicable Fees.
                      </li>
                      <li className="mt-4">
                        9.3. Each Withdrawal of Virtual Currency is subject to
                        mining fee charged by the respective blockchain network.
                        When sending your transaction to the blockchain, we will
                        try to keep the balance between reasonable fees and
                        speed of processing, however, we reserve the right to
                        determine the exact amount of mining fee to be set in
                        our sole discretion. You can check the exact amount of
                        mining fee charged for the specific transaction by
                        checking the respective blockchain explorer (e.g.{' '}
                        <Link
                          href="https://www.blockchair.com/explorer"
                          className="font-bold text-blue-500"
                        >
                          https://www.blockchair.com/explorer
                        </Link>{' '}
                        for BTC and BCH,{' '}
                        <Link
                          href="https://etherscan.io/"
                          className="font-bold text-blue-500"
                        >
                          https://etherscan.io/
                        </Link>{' '}
                        for ETH, etc.).
                      </li>
                      <li className="mt-4">
                        9.4. The Company shall not be liable for the transfer of
                        your units of Virtual Currency to other wallets. You are
                        solely liable for the accuracy of information, required
                        for carrying out a Withdrawal (i.e. addresses, tags and
                        any other required credentials). The Company strongly
                        advises you to always double-check the accuracy of
                        information provided for Withdrawal purposes.
                      </li>
                      <li className="mt-4">
                        9.5. You shall always keep in mind that blockchain
                        transactions are irreversible, and therefore, once the
                        transaction has been sent to the blockchain network upon
                        your request (in case of Withdrawals), we cannot reverse
                        it at all.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Fees</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        10.1. The Platform is operated on an automatically
                        Fee-charging basis for the Services and the Company does
                        not issue any invoices. The applicable Fees for any
                        transaction will be displayed to you before executing a
                        given transaction.
                      </li>
                      <li className="mt-4">
                        10.2. The Company may change the Fee structure at any
                        time (including adding new fees for new Services) and
                        reserves the right to do so in its sole discretion. The
                        Company will notify you about any changes in Fee
                        structure. This can be done by posting a notification on
                        the Website or sending you an e-mail (if appropriate).
                      </li>
                      <li className="mt-4">
                        10.3. Fees are paid in a Virtual Currency that
                        corresponds to the respective Service.
                      </li>
                      <li className="mt-4">
                        10.4. Fees shall be paid at the time of the completion
                        of each transaction.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Settlements, Cancellations, and Refunds</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        11.1. When depositing, withdrawing, or exchanging units
                        of Virtual Currencies for another Virtual Currency/fiat
                        money, respective assets shall be debited and credited
                        onto your Account.
                      </li>
                      <li className="mt-4">
                        11.2. Once your order to exchange Virtual Currency has
                        been completed, it cannot be canceled or reversed.
                        Exchanges are final and there are no refunds for them.
                      </li>
                      <li className="mt-4">
                        11.3. The order to exchange Virtual Currency can be
                        canceled by the Company in an event of a technical fault
                        of the Platform.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Content</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        12.1. The Company may produce and display content (the
                        "Content") on the Website, which includes but is not
                        limited to information, texts, images, video, and audio
                        files.
                      </li>
                      <li className="mt-4">
                        12.2. The Content does not constitute any form of
                        investment advice, financial advice, trading advice, or
                        any other sort of advice unless specifically mentioned
                        otherwise and should not be construed as such. The
                        Company shall not hold liability for any actions that
                        arise from its Content.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Intellectual Property</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        13.1. All components, Content of the Website, and the
                        Website as a whole belong to the Company and are
                        protected with, including, but not limited to copyright,
                        trademarks, trade secrets. All rights reserved.
                      </li>
                      <li className="mt-4">
                        13.2. You must not reproduce, reprint, publish, modify,
                        distribute, display, transmit, license, transfer or
                        otherwise exploit Content or technology from the Website
                        without Company's prior written consent.
                      </li>
                      <li className="mt-4">
                        13.3. Violation of any of the intellectual property
                        rights of the Company is strictly prohibited.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Links to Third-Party Websites</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        14.1. The Website may contain links to third-party
                        websites or services that are not owned or controlled by
                        the Company.
                      </li>
                      <li className="mt-4">
                        14.2. The Company has no control over and assumes no
                        responsibility for, the content, privacy policies, or
                        practices of any third-party web sites or services. The
                        Company shall not be responsible or liable, directly or
                        indirectly, for any damage or loss caused or alleged to
                        be caused by or in connection with the use of or
                        reliance on any such content, goods or services
                        available on or through any such websites or services.
                      </li>
                      <li className="mt-4">
                        14.3. For more information, please read these companies'
                        public policies.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Confidentiality and Privacy Policy</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        15.1. Personal information that you provide to the
                        Company, including information provided in accordance
                        with our AML Policy and any information about your use
                        of the Website that the Company obtains will be subject
                        to our Privacy Policy.
                      </li>
                      <li className="mt-4">
                        15.2. The Company may be obliged to disclose your
                        personal information to law enforcement authorities,
                        data protection authorities, financial regulators,
                        financial service providers, governmental authorities
                        and officials, and other authorized persons, as set
                        forth in the Privacy Policy.
                      </li>
                      <li className="mt-4">
                        15.3. In an event the Company suspects you of violation
                        the AML Policy, we shall report such behavior and
                        disclose relevant personal information to relevant
                        authorities in accordance with the Regulatory Law.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Disclaimers and Limitations of Liability</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        16.1. For non-performance or improper performance of
                        their obligations under these Terms, the Company and you
                        shall be liable in accordance with these Terms and the
                        Regulatory Law.
                      </li>
                      <li className="mt-4">
                        16.2. The Website, Content, and Services are provided
                        without any guarantees, conditions, or warranties as to
                        its accuracy, quality, and fit for a particular purpose
                        or need. The Company does not guarantee that the Website
                        and Services are error-free, reliable, or will operate
                        without interruption.
                      </li>
                      <li className="mt-4">
                        16.3. The Website is provided to you on the "AS-IS"
                        basis.
                      </li>
                      <li className="mt-4">
                        16.4. The Company does not guarantee that any exchange
                        requests will be accepted, executed, or recorded.
                      </li>
                      <li className="mt-4">
                        16.5. The Company shall not be liable for the use or
                        inability to use the Website and Services.
                      </li>
                      <li className="mt-4">
                        16.6. In no event shall the Company, its officers,
                        directors, employees, agents, third-party service
                        providers be liable to you or any other person or entity
                        for any direct, indirect, incidental, special, punitive,
                        or consequential damages whatsoever, including any that
                        may result from (i) the accuracy, completeness, or
                        content of the Website, (ii) the accuracy, completeness,
                        or content of any websites linked (through hyperlinks,
                        banner advertising or otherwise) to the Website, (iii)
                        the Services found at the Website or any websites linked
                        (through hyperlinks, banner advertising or otherwise) to
                        this Website, (iv) personal injury or property damage of
                        any nature whatsoever, (v) third-party conduct of any
                        nature whatsoever, (vi) any unauthorized access to or
                        use of Company's servers and/or any and all content,
                        personal information, blockchain information or other
                        information and data stored therein, (vii) any
                        interruption or cessation of Services to or from the
                        Website or any websites linked (through hyperlinks,
                        banner advertising or otherwise) to this site, (viii)
                        any viruses, worms, bugs, trojan horses, or the like,
                        which may be transmitted to or from this site or any
                        websites linked (through hyperlinks, banner advertising
                        or otherwise) to this Website, (ix) any loss or damage
                        of any kind incurred as a result of your use of the
                        Website or the Services found at the Website, whether
                        based on warranty, contract, tort, or any other legal or
                        equitable theory, and whether or not the company is
                        advised of the possibility of such damages, (x) losing
                        access and/or unauthorized access to your Account, (xi)
                        any errors or malfunctions caused by or otherwise
                        related to any wallets used to deposit and withdraw
                        Virtual Currencies, (xii) malfunctions, breakdowns and
                        abandonment of blockchain protocols, (xiii) changes in
                        regulatory approaches or legal actions taken regarding
                        the blockchain technology and Virtual Currency, (xiv)
                        taxation and/or changes in tax system regarding Virtual
                        Currencies, (xv) advancements in cryptography, any
                        technical advancements that may present risks to
                        blockchain protocols, (xvi) unfavorable fluctuations of
                        Virtual Currencies, (xvii) errors in the provision of
                        Services; (xviii) other risks associated with
                        purchasing, holding, and Virtual Currencies, and using
                        the Website and Services.
                      </li>
                      <li className="mt-4">
                        16.7. The Company shall not be liable for any events
                        that may include but are not limited to civil, criminal,
                        and administrative actions that may arise from you using
                        blockchain and Virtual Currency if such use is forbidden
                        or otherwise limited in your country.
                      </li>
                      <li className="mt-4">
                        16.8. The Company, its officers, directors, employees,
                        and agents do not provide investment advice, financial
                        advice, trading advice, legal advice or any other sort
                        of advice.
                      </li>
                      <li className="mt-4">
                        16.9. To the extent permitted by Regulatory Law, you
                        agree to defend, indemnify, and hold harmless the
                        Company from and against any and all claims, damages,
                        obligations, losses, liabilities, costs or debt, and
                        expenses arising from: (i) your use of and access to the
                        Website and Services; (ii) your violation of any term of
                        these Terms; or, (iii) your violation of the Regulatory
                        Law, including any law, rule, or regulation, or the
                        rights of any third party.
                      </li>
                      <li className="mt-4">
                        16.10. In case of any circumstances of insuperable force
                        (i.e. events of extraordinary or insuperable nature)
                        that have occurred and remain in effect beyond your and
                        the Company's (the "Parties'") control and that a Party
                        could neither foresee nor prevent for objective reasons,
                        if these circumstances prevent a Party from proper
                        fulfilment of its obligations hereunder, the term for
                        fulfilment of such obligations hereunder shall be
                        extended for the period of the effect of such
                        circumstances of insuperable force. The circumstances of
                        insuperable force shall include wars and other military
                        operations, earthquakes, floods, and other natural
                        disasters, adoption of laws and regulations by state and
                        local authorities, failure of power supply or
                        communication system or other similar circumstances that
                        prevent the Parties from the proper fulfilment of their
                        obligations hereunder.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Announcements</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        17.1. The Company may from time to time post official
                        announcements, news, notices, etc. (the "Announcements")
                        on the Website. In no event shall the Company be liable
                        for any losses arising from you neglecting or ignoring
                        the Announcements.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Force Majeure</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        18.1. We will not be liable for delays, failure in
                        performance or interruption of service which results
                        directly or indirectly from any cause or condition
                        beyond our reasonable control, including, but not
                        limited to, any delay or failure due to any act of God,
                        act of civil or military authorities, act of terrorists,
                        civil disturbance, war, strike or other labour dispute,
                        fire, interruption in telecommunications or internet
                        services or network provider services, failure of
                        equipment or software, other catastrophe or any other
                        occurrence which is beyond our reasonable control and
                        will not affect the validity and enforceability of any
                        remaining provisions.
                      </li>
                    </ol>
                  </li>
                  <li className="mt-8">
                    <span>
                      <b>Final Provisions</b>
                    </span>
                    <ol className="ml-6 list-inside">
                      <li className="mt-4">
                        19.1. These Terms shall remain in force until terminated
                        either by you or the Company. The Company may terminate
                        these Terms at any time at its own discretion without
                        explaining the reasons for this decision.
                      </li>
                      <li className="mt-4">
                        19.2. If any questions have not been regulated by these
                        Terms, they shall be regulated under the Regulatory Law.
                      </li>
                      <li className="mt-4">
                        19.3. These Terms are a legally binding agreement and
                        together with its other integral parts constitute an
                        entire agreement between you and the Company.
                      </li>
                      <li className="mt-4">
                        19.4. In an event the Website is available in multiple
                        languages, the English version of the Terms shall
                        prevail.
                      </li>
                      <li className="mt-4">
                        19.5. All provisions of these Terms applicable to the
                        Website shall apply to others means of providing
                        Services, including the App, unless specifically stated
                        otherwise.
                      </li>
                      <li className="mt-4">
                        19.6 Should you have any comments, questions, or
                        complaints, please contact us at{' '}
                        <Link
                          href="mailto:support@coins.fish"
                          className="font-bold text-blue-500"
                        >
                          support@coins.fish
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
