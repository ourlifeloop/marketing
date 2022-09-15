import React from 'react';

import SiteWrapper from '../components/site-wrapper';
import Section from '../primitives/section';
import Layout from '../primitives/layout';

export default function Terms() {
  const html = `
  <p><strong>IT’S NEVER 2 LATE, LLC</strong></p>
            <p><strong>LIFELOOP, LLC a wholly owned subsidiary of IT’S NEVER 2 LATE, LLC</strong></p>
            <p><strong>MASTER PURCHASE AND LICENSE AGREEMENT</strong></p>
            <p>This <strong>MASTER PURCHASE AND LICENSE AGREEMENT</strong> (“Agreement”) is made as of the execution
              date of the Order Summary (“Order Summary Effective Date”) by and between It’s Never 2 Late, LLC, and
              LifeLoop, LLC (a wholly owned subsidiary of It’s Never 2 Late, LLC), collectively referenced as “Company”
              with its principal place of business at 5889 S. Greenwood Plaza Blvd. Suite 320, Greenwood Village, CO
              80111 (“Company”) and the Purchaser. As used in this Agreement, “Purchaser” shall be understood to include
              the purchaser identified in the applicable Order Summary, and any entity which owns or controls, is owned
              or controlled by, or is under common ownership or control with said Purchaser. Company and Purchaser may
              be referred to in this Agreement collectively as the “parties” or individually as a “party.”</p>
            <p>Company offers systems that provide Purchaser’s end users with the ability to access and use: (1)
              software from Company and other third parties; (2) information, data, and content from Company and other
              third parties; and (3) third party hardware software, peripherals, and Third Party Offerings (as defined
              below) (collectively, the “Company Systems”), to empower individuals and staff to connect, engage, and
              enjoy life. Purchaser desires to purchase a subscription to access and use the Company Systems for
              Purchaser’s long-term care communities or other locations where the Company Systems will be used and
              maintained (“Use Sites”).</p>
            <p>This Agreement sets forth the terms and conditions under which Company will provide Purchaser with a
              subscription to access and use those Company Systems specified in one or more order summaries executed by
              both parties (each, an “Order Summary”) and will perform those services specified in each Order Summary,
              including the services made available through the Company Systems (the “Services,” as further described
              herein). All access to and use of the Company Systems and the performance of all Services are subject to
              the terms of this Agreement. If the terms of any Order Summary conflict with the terms of this Agreement,
              the terms of the Order Summary shall control.</p>
            <p>This Agreement includes this page, the attached Terms and Conditions, the Exhibits referenced herein, and
              each Order Summary entered into by the parties hereunder, all of which are hereby incorporated into and
              made a part of this Agreement. This Agreement represents the entire agreement between the parties with
              respect to the subject matter hereof, and supersedes any and all prior and contemporaneous oral and
              written communications between the parties in relation to the subject matter of this Agreement.</p>
            <p><strong>Terms and Conditions</strong></p>
            <ol>
              <li><strong>DEFINITIONS</strong>. All capitalized terms used in this Agreement and defined in the context
                in which they are used will have the meanings given to them herein. All other terms used in this
                Agreement will have their plain English meaning as commonly interpreted in the United States.
              </li>
              <li><strong>ORDER SUMMARY. </strong>Purchaser may enter into one or multiple Order Summaries under this
                Agreement. Each Order Summary must be submitted to Company using an approved Company form ordering
                document, which Company shall provide to purchaser upon request.&nbsp; Order Summaries under this
                Agreement will be effective when signed by authorized representatives of both parties. Purchaser will
                have no rights to access or use any Company Systems or Services unless an applicable Order Summary has
                been executed.
              </li>
              <li><strong>TERM</strong>. The term of this Agreement will begin on the Order Summary Effective Date for
                the first Order Summary executed between the parties and will continue thereafter until terminated in
                accordance with the terms of this Agreement (the “Term”). The term of each Order Summary will be the
                earlier of the day after the Company Systems are implemented at the Use Sites, or the effective date
                stated in the Order Summary (“Order Summary Effective Date”). Unless otherwise stated in an applicable
                Order Summary, the term of each Order Summary will begin on the effective date stated in the Order
                Summary (“Order Summary Effective Date”) and will continue thereafter for an initial period of three (3)
                years (“Initial Order Summary Term”). Unless otherwise stated in an applicable Exhibit or Order Summary,
                the term of each Order Summary shall automatically renew thereafter for additional 1-year renewal
                periods, unless either party provides written notice of termination at least sixty (60) days prior to
                the end of the Initial Order Summary Term or then-current renewal period. These renewal terms (if any)
                together with the Initial Order Summary Term shall be known as the “Order Summary Term.”
              </li>
              <li><strong>COMPANY SYSTEMS. </strong>The Company System is comprised of: (a) software developed by and/or
                for Company (“Company Software”); (b) software developed, provided, or maintained by third-party
                providers (“Third-Party Software”); (c) information, data, and content developed by and/or for Company
                (“Company Content”); (d) information, data, and content developed or provided by third-party providers
                (“Third-Party Content”), and (e) any Hardware purchased or leased by the Purchaser as identified in an
                Order Summary.
              </li>
            </ol>
            <p style="padding-left: 80px;">4.1 <strong>Acceptance</strong>. Purchaser must visually inspect all Company
              Systems upon receipt and promptly report possible errors or damage to Company. Unless Purchaser provides
              written notice to Company of material defects in any Company Systems within five (5) days following the
              receipt of the Company Systems, the Company Systems will be deemed accepted by Purchaser when delivered.
              Notices provided pursuant to this Section must describe the material defects in reasonable detail.</p>
            <p style="padding-left: 80px;">4.2 <strong>Hardware</strong>. As part of the Company Systems, Company may
              supply Purchaser with third party hardware, peripheral devices, network communication devices, computers,
              and other equipment related to the Company System as identified in an Order Summary (“Hardware”). If
              Purchaser elects to purchase Hardware, Purchaser shall pay any and all applicable Fees for such Hardware,
              as described in the applicable Order Summary. Alternatively, if Purchaser elects to sublease Hardware from
              Company (such Hardware, “Leased Hardware”), Exhibit A shall apply. The Order Summary shall indicate
              whether the Purchaser is purchasing or leasing Hardware.</p>
            <p style="padding-left: 120px;">4.2.1 <u>Title and Risk of Loss</u>. Purchaser acknowledges that Company is
              acting only as a distributor or reseller of such Hardware and all Hardware is also subject to the
              applicable terms and conditions of any third-party provider of such Hardware. Title and risk of loss for
              any Hardware shall transfer to Purchaser FOB shipping point. As between Purchaser and Company, Purchaser
              is responsible for any loss, destruction, damage, or theft of or to the hardware following transfer of the
              risk and title to Purchaser.</p>
            <p style="padding-left: 80px;">4.3 <strong>Functionality</strong>. Company shall provide Purchaser with
              applicable user manuals, system documentation, or warranty information described in the Order Summary
              related to the Company Systems (“System Materials”). The Company Systems will include the functionality
              described in the applicable System Materials. Company may from time to time update, change, or revise the
              functionality of the Company Systems, provided the functionality of the Company Systems is not materially
              decreased from that described in the applicable System Materials.</p>
            <p style="padding-left: 80px;">4.4 <strong>License.</strong></p>
            <p style="padding-left: 120px;">4.4.1 <u>Company Software and Company Content</u>. Subject to the terms and
              conditions of this Agreement, including Purchaser’s payment of all applicable Fees, Company hereby grants
              Purchaser a limited, non-exclusive, non-transferable license to access and use the Company Software and
              Company Content solely for Purchaser’s internal, non-commercial use in connection with the Company Systems
              at the Use Sites. Company also grants Purchaser a limited, non-exclusive, non-transferable license to use
              the System Materials solely in connection with Purchaser’s use and access of the Company Systems.</p>
            <p style="padding-left: 120px;">4.4.2 <u>Third-Party Offerings</u>. Purchaser acknowledges and agrees that
              certain portions of the Company Systems may include Third-Party Software, Third-Party Content, or Hardware
              (“Third Party Offerings”). For any Third-Party Offering for which Company has the right to sub-license use
              for the Company System, subject to the terms and conditions of this Agreement, Company hereby grants
              Purchaser a limited, non-exclusive, non-transferable license to access and use the Third-Party Offerings
              solely for Purchaser’s internal, non-commercial use in connection with the Company Systems at the Use
              Sites. Purchaser’s access to and use of any Third Party Offering is also subject to any other agreement
              separate from this Agreement that Purchaser may enter into (or may have entered into) relating to those
              Third Party Offerings.</p>
            <p style="padding-left: 120px;">4.4.3 <u>Additional Performance Licenses</u>. The Company Systems may allow
              Purchaser to play, show, display, or otherwise perform certain Third-Party Content such as music and other
              media. Conducting these activities may be restricted without acquiring appropriate licensing under
              copyright or other applicable law. Licenses for these performances are not included with the Company
              Systems or as part of this Agreement.</p>
            <p style="padding-left: 80px;">4.5 <strong>Access and Accounts.</strong> Purchaser may access the Company
              Systems solely through an account established for Purchaser (“Account”). Purchaser will be permitted to
              establish user identifications and passwords through which its employees and other end users of Purchaser
              (“Users”) may access the Company Systems under Purchaser’s Account (each, an “Account ID”). Purchaser will
              ensure that all information about each User provided to Company in connection with establishing each
              Account ID is accurate and complete, and will maintain that information as accurate and complete
              throughout the Term. Purchaser may allow its Users to access and use the Company Systems solely for
              purposes of exercising the rights granted to Purchaser under this Agreement. Users may be required to
              agree to separate terms and conditions applicable to the Company System. Purchaser is and will remain
              solely responsible for all use of the Company Systems by each User and for compliance by each User with
              the applicable terms. Purchaser will ensure the security and confidentiality of each Account ID and will
              use commercially reasonable efforts to prevent unauthorized access to or use of the Company Systems.
              Purchaser will notify Company promptly of any such unauthorized access or use of the Company Systems or if
              any Account ID is lost, stolen, or otherwise compromised. Purchaser is and will remain fully responsible
              for all costs, fees, liabilities, or damages incurred through any access to or use of the Company Systems
              through Purchaser’s Account or by any User, and that any use of Purchaser’s Account will be deemed to have
              been completed by Purchaser. In no event will Company be liable for the foregoing obligations or any
              failure by Purchaser to fulfill such obligations.</p>
            <p style="padding-left: 80px;">4.6 <strong>Restrictions</strong>.&nbsp;Purchaser acknowledges that the
              Company Systems, as well as the databases, software, content, hardware, and other technology, systems, and
              networks used by or on behalf of Company and its third-party providers to operate the Company Systems, and
              the structure, organization, and underlying data, information, and software code thereof (collectively,
              the “Technology”), constitute valuable intellectual property of Company and its third-party providers.
              Without limiting the other obligations of Purchaser under this Agreement, and as a condition to the rights
              granted herein, Purchaser will not, and will not permit any User or other third party to: (a) use, access,
              or attempt to access the Technology or any portion thereof except as expressly provided in this Agreement;
              (b) use the Technology in any unlawful manner or in any other manner that could damage, disable,
              overburden or impair the Technology; (c) use automated scripts to collect information from or otherwise
              interact with the Technology; (d) alter, modify, reproduce, create derivative works of the Technology; (e)
              distribute, sell, resell, lend, loan, lease, license, sublicense or transfer any rights to access or use
              the Technology or otherwise make the Technology available to any third party; (f) reverse engineer,
              disassemble, decompile, or otherwise attempt to derive the method of operation of the Technology; (g)
              attempt to circumvent or overcome any technological protection measures intended to restrict access to any
              portion of the Technology; (h) monitor the availability, performance, or functionality of the Technology;
              (i) interfere with the operation or hosting of the Technology; (j) use the Technology to transmit,
              distribute, redirect, or store material that, as reasonably determined by Company, is inappropriate,
              obscene, defamatory, libelous, threatening, abusive, hateful or which contains or incites violence. or (k)
              alter, obscure, or remove any copyright, trademark, or any other notices that are provided on or in
              connection with the Technology.</p>
            <p style="padding-left: 80px;">4.7 <strong>Outside Content</strong>. Purchaser acknowledges that, given the
              nature of the Company Systems, it may be possible for Users to use the Company Systems to access third
              party digital content that is not Company Content or a Third Party Offering (such content, “Outside
              Content”). Purchaser is responsible for ensuring that Purchaser’s unique organizational content and
              security settings have been applied to each device provided to Purchaser as part of a Company System.
              COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE FOR ANY DAMAGES ARISING FROM OUTSIDE CONTENT ACCESSED BY USERS
              VIA THE COMPANY SYSTEMS.</p>
            <p style="padding-left: 80px;">4.8 <strong>Use Sites. </strong>Purchaser shall only use the Company Systems
              at the Use Sites identified in the applicable Order Summary. If Purchaser wishes to change the Use Sites,
              Purchaser must notify Company of the modified Use Sites and obtain Company’s prior written approval before
              initiating such transfer, such approval shall not be unreasonably withheld.</p>
            <ol start="5">
              <li><strong>SERVICES</strong>. If Purchaser enters into an Order Summary that describes any Upgrade
                Services, Maintenance and Support Services, or other Professional Services (collectively, the
                “Services”), Company will use commercially reasonable efforts to provide those Services to Purchaser
                during the Term. All such Services are provided subject to the terms and conditions of this Agreement.
                Company has no obligation to provide any of the following Services unless specified in an Order Summary.
                If the Services purchased by the Purchaser via an Order Summary include cellular data or connectivity
                (“Cellular Service”), Purchaser agrees to the Cellular Terms provided as Exhibit B and represents and
                warrants that it has read, understood, and accepted the same.
              </li>
            </ol>
            <p style="padding-left: 80px;">5.1 <strong>Upgrade Services. </strong>Except as may be set forth in an Order
              Summary or, as applicable, an Exhibit hereto, the Fees do not include any updates, upgrades,
              modifications, changes, additions, or improvements to the Company Systems (“Upgrade Services”), but
              Company shall endeavor to provide typical software updates and patches. If Purchaser requests Upgrade
              Services at any time during the Term, Company may agree to provide such Upgraded Services, and reserves
              the right to charge Purchaser reasonable additional Fees for such Upgraded Services. Company shall have
              the right to provide Upgrade Services at any time in its own discretion. Company further has the right to
              require that Purchaser allow Company to update, upgrade, modify, change, add, or improve software
              components of the Company system at any time as Company determines is necessary for the continued
              operation of the Company System (such necessary Upgrade Services, the “Required Upgrade Services”). If
              Company deems that Required Upgrade Services are necessary, and Purchaser has made all applicable payment
              of Fees, any such Required Upgrade Services may be made at no further cost to Purchaser. Any updates,
              upgrades, modifications, changes, additions, or improvements to the Company Systems provided by Company as
              part of any Upgrade Services will be treated as part of the “Company System” for purposes of this
              Agreement.</p>
            <p style="padding-left: 80px;">5.2 <strong>Maintenance and Support Services.&nbsp;</strong>Except as may be
              set forth in an Order Summary or any applicable Exhibits hereto, the Fees do not include any maintenance,
              support, implementation, or training relating to the Company Systems (“Maintenance and Support Services”).
              Notwithstanding the foregoing, should Company elect to provide Purchaser with any Maintenance and Support
              Services, such Maintenance and Support Services will be provided pursuant to Company’s then-current terms
              and at Company’s then-current fees for such Maintenance and Support Services, as applicable. Purchaser may
              not obtain maintenance, support, implementation, or training services for the Company Systems from any
              third party, and Purchaser will be solely responsible for performing all other maintenance, support,
              implementation, or training services not specified in an Order Summary. Maintenance and Support Services
              shall be performed during the working hours stated in the Order Summary applicable to those Maintenance
              and Support Services, or, if no working hours are stated, the Maintenance and Support Services will be
              provided during the hours of 7:00 a.m. to 5:00 p.m., Mountain Standard Time, Monday through Friday, 8:00
              a.m. to 5:00 p.m., Mountain Standard Time, Saturday and Sunday, excluding holidays.</p>
            <p style="padding-left: 80px;">5.3 <strong>Professional Services. </strong>Company will perform any
              additional professional or consulting services relating to the Company Systems (“Professional Services”)
              if specified in any Order Summary mutually agreed to by both parties under this Agreement. Company will
              perform all Professional Services at the rates for those Professional Services set forth in each
              applicable Order Summary, or, if no rates are set forth in an applicable Order Summary, at Company’s
              then-current rates for those Professional Services.</p>
            <p style="padding-left: 80px;">5.4 <strong>Availability of Company Systems. </strong>Company warrants that,
              following commencement of Purchaser’s use of the Solution, the Solution will be available to Purchaser at
              least 99% of the time in each calendar month during the term of this Agreement, excluding the following
              (collectively, “Excused Down Time”) down time due to: (a) equipment malfunctions; (b) periodic maintenance
              procedures or repairs which Company may undertake from time to time; (c) malfunctions and other failures
              relating to the web sites or services of third parties affecting the Systems or the Purchaser’s Data; or
              (d) causes beyond the control of Company, including, without limitation, interruption or failure of
              telecommunication or digital transmission links, hostile network attacks and network congestion or other
              failures. Company does not guarantee the timeliness or availability of the Systems.&nbsp; Subject to the
              terms above and Exhibit B (Cellular Terms), in the event Company’s Systems falls below 99% in any given
              month, a credit will be issued for 5% of Customer’s monthly recurring fees. Service level credits may not
              exceed one (1) month of recurring fees annually.</p>
            <ol start="6">
              <li><strong>FEES AND PAYMENT.</strong></li>
            </ol>
            <p style="padding-left: 80px;">6.1 <strong>Fees</strong>. Purchaser shall pay Company all amounts specified
              in each Order Summary (“Fees”). Company may increase fees on an annual basis effective on each anniversary
              of the Order Summary Effective Date. Company may also increase fees to current list price upon expiration
              of Initial Order Summary Term.</p>
            <p style="padding-left: 80px;">6.2 <strong>Payment</strong>. All Fees will be invoiced in advance in
              accordance with the terms of the applicable Order Summary. If no payment terms are set forth in the
              applicable Order Summary, such Fees will be invoiced on the Order Summary Effective Date and thereafter on
              an annual basis thirty (30) days prior to the anniversary of the Order Summary Effective Date. All Fees
              set forth in an invoice issued by Company will be due and payable by Purchaser in immediately available
              U.S. funds within thirty (30) days of the date of invoice. If Purchaser has not made payment within 30
              days of the date of invoice (if any), Purchaser shall be deemed to be in material breach of this
              Agreement. If Purchaser has specified in Purchaser’s Account that Fees shall be paid by direct withdrawal
              or deposit from a credit card, debit card, ACH, wire transfer, mobile services account, or other payment
              method linked to Purchaser’s Account, Purchaser grants Company the right to charge the payment method
              provided to Company for all Fees incurred under this Agreement and Company shall be under no obligation to
              issue an invoice for such Fees. If Purchaser wishes to change its payment method, Purchaser can do so by
              notifying Company in writing. All Fees will be non-refundable once paid to Company (including upon any
              termination or suspension of this Agreement). Until paid in full, all past due amounts will bear an
              additional charge of the lesser of 1½% per month or the maximum amount permitted under applicable law.
              Failure of Purchaser to fully pay any Fees when due shall be deemed a material breach and justify the
              immediate suspension of Purchaser’s access to the Services or, in Company’s discretion, the termination of
              this Agreement. Any such suspension does not relieve Purchaser from paying all amounts due under this
              Agreement for the remainder of the then applicable term of the Order Summary.&nbsp; Purchaser’s failure to
              pay Fees when due will constitute sufficient cause for Company to remotely suspend Purchaser’s access to
              the Company Systems or any Services upon notice to Purchaser. Company Systems and Equipment will not be
              released for shipment and any Services or Professional Services will not be scheduled or rendered until
              all Fees due are paid in full.</p>
            <p style="padding-left: 80px;">6.3 <strong>Taxes</strong>. The Fees do not include any sales, use, or other
              taxes, levies, or duties (“Taxes”). Purchaser is responsible for paying all Taxes that may be imposed by
              way of the performance of either party under this Agreement, excluding only Taxes based on Company’s net
              income.</p>
            <p style="padding-left: 80px;">6.4 <strong>Expenses</strong>. Purchaser shall reimburse Company for
              reasonable expenses incurred during the provision of Services. Expenses are billed based on actual costs
              incurred. Any estimated expenses will, if necessary, be included in each Order Summary.</p>
            <ol start="7">
              <li><strong>TERMINATION.</strong></li>
            </ol>
            <p style="padding-left: 80px;">7.1 <strong>Termination</strong>. Either party may terminate this Agreement
              or any Order Summary immediately upon written notice to the other party if the other party: (a) is in
              material breach of this Agreement or any Order Summary and fails to remedy such breach within thirty (30)
              days following the breaching party’s receipt of notice of such breach; or (b) materially breaches this
              Agreement in a manner that cannot be remedied. Either party may also immediately terminate this Agreement
              upon written notice to the other party if the other party: (i) is dissolved or liquidated or takes any
              corporate action for such purpose; (ii) becomes insolvent or is generally unable to pay its debts as they
              become due; (iii) becomes the subject of any voluntary or involuntary bankruptcy proceeding under any
              bankruptcy or insolvency law; (iv) makes or seeks to make a general assignment for the benefit of its
              creditors; or (v) applies for, or consents to, the appointment of a trustee, receiver or custodian for a
              substantial part of its property. Any termination of this Agreement will terminate all Order Summaries
              under this Agreement. Any termination of an Order Summary will relate only to that Order Summary (unless
              otherwise specified in the notice of termination).</p>
            <p style="padding-left: 80px;">7.2 <strong>Service Discontinuance. </strong>If Company at any time
              discontinues offering any Company Systems, or any portion thereof, or any Services to new customers,
              Company will give Purchaser reasonable advance notice of such discontinuation. Upon such date of
              discontinuation, Company will have the right to terminate this Agreement as to those Company Systems or
              Services upon notice to Purchaser. As of the date of termination, Company will credit to Purchaser, on a
              pro-rated basis, any pre-paid Fees under this Agreement and Company shall have no further obligation to
              provide the Company Systems or any Service under this Agreement.</p>
            <p style="padding-left: 80px;">7.3 <strong>Suspension</strong>. Without limiting Company’s right to
              terminate this Agreement, Company may immediately suspend Purchaser’s access to the Company Systems if
              Company reasonably believes Purchaser’s or any User’s use of the Company Systems may be in violation of
              this Agreement or applicable law, or that the continued access to or use of the Company Systems by
              Purchaser may present a security risk, or otherwise place Company, the Technology, any other Company
              customer, or any third party at risk of harm, loss, or liability.</p>
            <p style="padding-left: 80px;">7.4 <strong>Effect of Termination.&nbsp;</strong>Upon termination or
              expiration of this Agreement or any Order Summary for any reason: (a) Company will immediately cease
              providing access to all Company Systems and Services under this Agreement or applicable Order Summary; (b)
              all rights and licenses granted to Purchaser under this Agreement or applicable Order Summary will
              immediately terminate; (c) Purchaser will immediately cease all use of and access to all Company Systems
              and Services; (d) if Exhibit A applies, Purchaser shall return all Leased Hardware in accordance with the
              terms of Exhibit A; (e) all Fees and other amounts then owed by Purchaser under this Agreement will become
              immediately due and payable to Company, and Purchaser grants Company a security interest in Hardware for
              any unpaid amounts; and (f) Purchaser will immediately either return to Company or, at Company’s
              discretion, destroy any software or content on the Company Systems, System Materials, and Confidential
              Information then in Purchaser’s possession or control. Upon termination or expiration, Company shall have
              the right to remotely access the Company System, or any feature within the Company System, and shut down
              the Company System or remove software or content from the Company System. At Company’s request, an officer
              of Purchaser will certify in writing that it has fully complied with its obligations under this Section.
              The following Sections will survive termination or expiration of this Agreement for any reason: 6 (Fees
              and Payment), 7.4 (Effect of Termination), 8 (Ownership), 11 (Disclaimer), 12 (Indemnification), 13
              (Limitation on Liability), 14 (Confidentiality), 15 (Equitable Relief); 16 (Disputes); 17 (Governing Law
              and Venue), 18 (Export Controls); 19 (Force Majeure), 20 (Notice), and 22 (Additional Terms).</p>
            <ol start="8">
              <li><strong>OWNERSHIP</strong>. Company and its third-party providers retain all right, title, and
                interest in and to the Technology and System Materials, all additions, improvements, updates, versions,
                or other modifications thereto, and all IPR (as defined below) therein or related thereto. Purchaser
                does not receive any ownership interest in or to any of the foregoing, and except as expressly granted
                in this Agreement, Company grants no rights or licenses to Purchaser (whether by implication, estoppel,
                or otherwise) in or to the Company Systems, Services or any IPR therein or relating thereto. All names
                and logos associated with the Company Systems and Services are trademarks of Company (or its third-party
                providers) and no right or license is granted to Purchaser to use them. Any rights not expressly granted
                to Purchaser hereunder are reserved by Company. Purchaser will not remove or alter any proprietary
                rights legend on the Company Systems. For purposes of this Agreement, “IPR” means any and all
                intellectual property rights, proprietary rights, rights of publicity, rights of privacy, and any and
                all other legal rights protecting data, information or intangible property throughout the world,
                including, without limitation, any and all copyrights, trademarks, service marks, trade secrets, patent
                rights, moral rights, sui generis rights in databases, and contract rights.
              </li>
              <li><strong>DATA</strong>.</li>
            </ol>
            <p style="padding-left: 80px;">9.1 <strong>Purchaser Data. </strong>As between Purchaser and Company,
              Purchaser retains ownership of all data, information, and other content provided to Company or through the
              Company Systems by or on behalf of Purchaser in connection with Purchaser’s use of the Company Systems
              (“Purchaser Data”). Purchaser is solely responsible for all Purchaser Data, including the accuracy,
              quality, integrity, legality, reliability, and appropriateness thereof, and Company assumes no
              responsibility for any Purchaser Data. Purchaser will obtain and maintain all authorizations, approvals,
              permissions, consents and other rights necessary for Company to use and process all Purchaser Data in the
              performance of the Services and any other obligations of Company under this Agreement. Purchaser will
              maintain an adequate back-up of all Purchaser Data and Company will not be responsible or liable for any
              deletion, correction, destruction, damage, loss, or failure to store or back-up any of Purchaser Data.</p>
            <p style="padding-left: 80px;">9.2 <strong>Company Data. </strong>Company may capture, analyze, use and
              disclose data and information related to Purchaser’s use and performance of the Company Systems (“Company
              Data”). All Company Data will be owned by Company and may be used by Company or its permitted service
              providers, for any lawful business purpose, including the improvement or monitoring of the Company
              platform, provided that the data and information is used only in an aggregated form, without directly
              identifying Purchaser, or any other User, as the source thereof.</p>
            <p style="padding-left: 80px;">9.3 <strong>Data Privacy. </strong>Company will not use, share or retain any
              Purchaser Data relating to an identified or identifiable natural person (“Purchaser Personal Data”) other
              than in accordance with this Agreement or as otherwise instructed by Purchaser, provided that Company may
              use Purchaser Personal Data as required to comply with applicable law to which Company is subject.</p>
            <p style="padding-left: 80px;">9.4<strong> Data Security.</strong> Company will implement reasonable and
              appropriate technical and organizational measures in accordance with industry standards to ensure a level
              of security appropriate to the risk posed to the Purchaser Data. Subject to applicable law, Company will
              notify Purchaser in writing if Company becomes aware of a breach of security leading to the accidental or
              unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Purchaser Data
              (“Security Breach”). Each party is solely responsible for complying with laws applicable to such party
              with respect to any such Security Breach, including fulfilling any notification obligations related to
              such breach.</p>
            <ol start="10">
              <li><strong>REPRESENTATIONS AND WARRANTIES.</strong></li>
            </ol>
            <p style="padding-left: 80px;">10.1 <strong>General</strong>. Each party represents, warrants, and covenants
              to the other party that: (a) it has and will continue to have during the Term, all rights, power, and
              authority necessary to enter into this Agreement and perform all of its obligations under this Agreement;
              (b) the performance of its obligations under this Agreement does not violate any federal, state, or local
              laws, rules, and regulations (“Laws”) applicable to such party performance, any rights of any third party,
              or any agreement by which such party is bound; and (c) it will procure all rights, certificates, licenses,
              permits, or other approvals required for its performance under this Agreement.</p>
            <p style="padding-left: 80px;">10.2 <strong>Company Systems. </strong>Company represents and warrants to
              Purchaser that Company will use commercially reasonable efforts to maintain and verify that the Company
              Systems operate in accordance with the applicable System Materials and with any other levels of
              performance specified in an applicable Order Summary. Company’s sole obligation and Purchaser’s sole and
              exclusive remedy in the event of any failure of the Company Systems to comply with any such performance
              levels will be for Company to, at its option: (a) remedy the failure; or (b) refund Purchaser the portion
              of any Fees applicable to the portion of the Company Systems subject to the failure. This Section does not
              entitle Purchaser to any Maintenance and Support Services for the Company that are not described in an
              Order Summary. Any and all warranties under this Section shall be deemed waived by Purchaser and null and
              void, and Company shall have no obligation to Purchaser under any such warranties, if Purchaser: (i) fails
              to properly maintain and service the Company Systems; (ii) uses the Company Systems in a manner contrary
              to the System Materials; (iii) installs software or content that is not approved or authorized by Company;
              or (iv) makes any alteration, addition, improvement, modification or attachment to the Company Systems
              that is not authorized or approved by Company.</p>
            <ol start="11">
              <li><strong>DISCLAIMER</strong>. <strong>PURCHASER ACKNOWLEDGES THAT THE COMPANY SYSTEMS AND SERVICES
                UNDER THIS AGREEMENT ARE PROVIDED BY COMPANY AND ITS THIRD-PARTY PROVIDERS STRICTLY “AS IS” AND “AS
                AVAILABLE.” EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, COMPANY MAKES NO REPRESENTATIONS OR
                WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, IN CONNECTION WITH THIS AGREEMENT OR THE
                COMPANY SYSTEMS, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE,
                MERCHANTABILITY, TITLE, NON-INFRINGEMENT, AVAILABILITY OR ERROR-FREE OPERATION. NO ORAL OR WRITTEN
                INFORMATION OR ADVICE GIVEN BY COMPANY, ITS EMPLOYEES, DISTRIBUTORS, DEALERS, OR AGENTS WILL INCREASE
                THE SCOPE OF, OR CREATE ANY NEW WARRANTIES IN ADDITION TO THE WARRANTIES EXPRESSLY SET FORTH IN THIS
                AGREEMENT.</strong></li>
              <li><strong>INDEMNIFICATION.</strong></li>
            </ol>
            <p style="padding-left: 80px;">12.1 <strong>By Purchaser. </strong>Purchaser will indemnify, defend, and
              hold harmless Company and its officers, directors, employees, and agents (collectively, “Company
              Indemnitees”) from and against any and all claims, demands, actions, proceedings or suits (“Claims”)
              brought against any Company Indemnitee and any related liabilities, losses, damages and expenses, costs
              (including court costs and reasonable attorneys’ fees) (“Losses”) arising out of, relating to, or
              resulting from: (a) use of or access to the Company Systems or Services by Purchaser or any User, (b)
              Purchaser’s negligence or willful misconduct, (c) Purchaser’s material breach of any representation,
              warranty, covenant or obligation in this Agreement or any Exhibits hereto, or failure to comply with any
              applicable Laws.</p>
            <p style="padding-left: 80px;">12.2 <strong>By Company. </strong>Company will indemnify, defend, and hold
              harmless Purchaser and its officers, directors, employees, and agents (collectively, “Purchaser
              Indemnitees”) from and against any Claims brought against any Purchaser Indemnitee by a third party, and
              any related Losses, that the use by Purchaser of any Company System infringes or misappropriates the IRP
              of such third party. If Purchaser is, or Company reasonably believes that Purchaser will become subject to
              any such third party claim, Company may at its option: (a) procure the right for Purchaser to continue
              using such Company System; (b) replace or modify such Company System so that it no longer infringes, or
              (c) terminate this Agreement and provide Purchaser a pro-rated refund of any pre-paid unused Fees
              applicable to such Company System (if any). Company’s obligations under this Section will not apply to any
              Claim arising from: (i) other software, hardware, systems, network, or technology not provided by Company
              as part of any Company System; (ii) any modifications or changes to any Company System by or on behalf of
              Purchaser, whether or not in violation of this Agreement; (iii) Purchaser Data; (iv) access to or use of
              any Company System other than as permitted by this Agreement; or (v) use, installation, integration,
              incorporation, or combination of any Company System with or into any other software, hardware, system,
              network, or technology. THIS SECTION CONSTITUTES COMPANY’S SOLE AND EXCLUSIVE LIABILITY, AND PURCHASER’S
              SOLE AND EXCLUSIVE REMEDY, FOR ANY INFRINGEMENT OR MISAPPROPRIATION OF IPR OR ANY OTHER RIGHTS RELATING TO
              THE COMPANY SYSTEMS.</p>
            <p style="padding-left: 80px;">12.3 <strong>Conditions</strong>. Each party’s indemnification obligations
              under this Agreement are conditioned upon the party seeking indemnification (the “Indemnified Party”)
              providing the other party with: (a) prompt notice of any such claim for indemnification; (b) sole control
              over the defense and settlement of such claim, provided that any settlement that will require the
              Indemnified Party to assume any liability other than the payment of monies will be subject to the
              Indemnified Party’s prior written consent; and (c) reasonable assistance in such defense or settlement (at
              the indemnifying or defending party’s expense). A party’s failure to promptly notify the other party of
              any claim for indemnification will not relieve the indemnifying party of its obligations to indemnify
              except to the extent that the indemnifying party can demonstrate that it has been materially prejudiced in
              its ability to defend such claim as a result of such failure.</p>
            <ol start="13">
              <li><strong>LIMITATION ON LIABILITY. </strong>EXCEPT FOR EITHER PARTY’S INDEMNIFICATION OBLIGATIONS OR ANY
                LIABILITY ARISING FROM A PARTY’S BREACH OF SECTION 4.6, IN NO EVENT WILL EITHER PARTY BE LIABLE TO THE
                OTHER PARTY FOR ANY LOSS OF PROFITS, LOSS OF BUSINESS, FINES OR PENALTIES, COSTS OF PROCUREMENT OF
                SUBSTITUTE SERVICES OR TECHNOLOGY, LOSS OF USE OR DATA, INTERRUPTION OF BUSINESS, OR ANY INDIRECT,
                INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY KIND, UNDER ANY THEORY OF LIABILITY,
                WHETHER IN CONTRACT, WARRANTY OR TORT (INCLUDING NEGLIGENCE AND STRICT LIABILITY) OR OTHERWISE, EVEN IF
                SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. EXCEPT FOR A PARTY’S BREACH OF SECTION
                14, SECTION 4.6, EACH PARTY’S INDEMNIFICATION OBLIGATIONS, AND PURCHASER’S PAYMENT OBLIGATIONS, AND TO
                THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL EITHER PARTY’S TOTAL CUMULATIVE LIABILITY IN
                CONNECTION WITH THIS AGREEMENT, EXCEED THE FEES PAID OR PAYABLE HEREUNDER IN THE THREE (3) MONTH PERIOD
                IMMEDIATELY PRECEDING THE EVENT GIVING CAUSE TO SUCH LIABILITY. PURCHASER AGREES THAT THE FEES REFLECT
                THE ALLOCATION OF RISK SET FORTH IN THIS AGREEMENT AND ACKNOWLEDGE THAT COMPANY WOULD NOT ENTER INTO
                THIS AGREEMENT WITHOUT THESE LIMITATIONS ON ITS LIABILITY. IN JURISDICTIONS WHERE LIMITATION OF
                LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES IS NOT PERMITTED, COMPANY’S LIABILITY WILL BE LIMITED
                TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </li>
              <li><strong>CONFIDENTIALITY.</strong></li>
            </ol>
            <p style="padding-left: 80px;">14.1<strong> Confidentiality Obligations. </strong>By virtue of this
              Agreement, each party may have access to the Confidential Information of the other party. For purposes of
              this Agreement, “Confidential Information” means any data or information regarding a party’s business or
              affairs, including customer information, marketing information, financial information, data (including
              software code), business concepts, business strategy, processes, methods, systems, know-how, devices,
              formulas, product specifications, marketing methods, prices, and customer lists, and any other data or
              information received or otherwise obtained under this Agreement, whether in oral, written, or electronic
              form, that is either: (a) designated as confidential; (b) of a nature such that a reasonable person would
              recognize it as confidential; or (c) disclosed under circumstances such that a reasonable person would
              know to treat it as confidential. For the avoidance of doubt, all Company Software, Company Content, and
              System Materials regardless of the form, including all copies and extracts thereof, shall be the
              Confidential Information of Company. Each party shall take all reasonable steps to ensure the
              confidentiality and security of the other party’s Confidential Information in the same manner as such
              party protects its own Confidential Information of a similar nature, and in no event with less than
              reasonable care. Each party will return to the other party, or destroy, all Confidential Information in
              such party’s possession or control, and permanently erase all electronic copies of all Confidential
              Information promptly upon the written request of the disclosing party or upon termination of this
              Agreement.</p>
            <p style="padding-left: 80px;">14.2 <strong>Restrictions on Use and Disclosure. </strong>Neither party shall
              use or disclose any Confidential Information of the other party for any purpose other than exercising its
              rights and performing its obligations under this Agreement. Neither party shall disclose any Confidential
              Information of the other party to any third party, except to the receiving party’s employees, agents, or
              contractors (which may include advisors, accountants, and attorneys) who have a need to know such
              Confidential Information for purposes of this Agreement; provided that any employee, agent, or contractor
              is bound by a duty of confidentiality at least as protective of the Confidential Information as the terms
              of this Agreement. Notwithstanding the foregoing, Confidential Information may be disclosed by a receiving
              party to the limited extent required in order to comply with the order of a court or other governmental
              body, or as otherwise necessary to comply with applicable law, provided that before disclosing such
              information the receiving party must provide the disclosing party with sufficient advance notice of the
              agency’s request for the information to enable the disclosing party to exercise any rights it may have to
              challenge or limit the request for such Confidential Information. 14.3. Exceptions. Notwithstanding the
              foregoing, the restrictions on use and disclosure of Confidential Information set forth in this Section 14
              shall not apply to the extent that such Confidential Information: (i) was rightfully known to the
              receiving party without restriction on use or disclosure prior to such information’s being disclosed or
              made available to the receiving party in connection with this Agreement, as shown by the receiving party’s
              written records; (ii) was or becomes generally known by or available to the public other than by the
              receiving party’s, or any of its representatives’, noncompliance with this Agreement; (iii) was or is
              received by the receiving party on a non-confidential basis from a third party that, to the receiving
              party’s knowledge, was not or is not, at the time of such receipt, under any obligation to maintain its
              confidentiality; or (iv) was or is independently developed by the receiving party without reference to,
              use of, or benefit from any Confidential Information, as shown by the receiving party’s written records.
            </p>
            <ol start="15">
              <li><strong>EQUITABLE RELIEF. </strong>Purchaser acknowledges and agrees that due to the unique nature of
                the Company Systems, related Technology and Confidential Information, a breach or threatened breach of
                its obligations under this Agreement would allow Purchaser or third parties to unfairly compete with
                Company, resulting in irreparable harm to Company for which there can be no adequate remedy at law.
                Accordingly, Purchaser agrees that in the event of such breach or threatened breach of this Agreement,
                Company will be entitled to seek equitable relief, including a restraining order, an injunction,
                specific performance and any other relief that may be available from any court, without any requirement
                to post a bond or other security, or to prove actual damages or that monetary damages are not an
                adequate remedy. Such remedies are not exclusive and are in addition to all other remedies that may be
                available at law, in equity or otherwise.
              </li>
              <li><strong>DISPUTES</strong>. Except as otherwise provided below, the parties will attempt to resolve all
                disputes, controversies, or claims arising under, out of, or relating to this Agreement, including the
                formation, validity, binding effect, interpretation, performance, breach or termination, of this
                Agreement and the arbitrability of the issues submitted to arbitration hereunder and non-contractual
                claims relating to this Agreement (each, a “Dispute”), in accordance with the procedures set forth in
                this Section. If any Dispute cannot be resolved through negotiations between the parties within five (5)
                days of notice from one party to the other of the Dispute, such Dispute will be finally settled through
                binding arbitration under the arbitration of the American Arbitration Association (“AAA”) then in effect
                (the “Rules”). Either party may commence the arbitration by delivering a request for arbitration as
                specified in the Rules. The arbitration will be conducted before a sole neutral arbitrator selected by
                agreement of the parties. If the parties cannot agree on the appointment of a single arbitrator within
                thirty (30) days (the “Initial Period”) after either party to this Agreement delivers a request for
                arbitration, a neutral arbitrator will be selected as provided in the Rules. The arbitration will be
                conducted exclusively in the English language at a site in Denver, Colorado U.S.A. The award of the
                arbitrator will be the exclusive remedy of the parties for all claims, counterclaims, issues or
                accountings presented or plead to the arbitrator. The award of the arbitrators will require payment of
                the costs, fees and expenses incurred by the prevailing party in any such arbitration by the
                non-prevailing party. Judgment upon the award may be entered in any court or governmental body having
                jurisdiction thereof. Any additional costs, fees or expenses incurred in enforcing the award may be
                charged against the party that resists its enforcement.
              </li>
              <li><strong>GOVERNING LAW AND VENUE</strong>. The interpretation of the rights and obligations of the
                parties under this Agreement, including, any disputes arising out of or related to this Agreement, will
                be governed by the laws of the State of Colorado, U.S.A. without regard to its choice of law principles.
                Subject to Section 16 (Disputes), all disputes or actions rising from or relating to this Agreement
                shall be submitted exclusively to the jurisdiction of the state and federal courts located in Denver,
                Colorado, U.S.A., and the parties hereby irrevocably submit to the personal jurisdiction of such courts.
              </li>
              <li><strong>EXPORT CONTROLS.</strong> The Company Systems, including without limitation software and
                content, and related technology are subject to U.S. export control laws and regulations and may be
                subject to export or import regulations in other countries. Purchaser agrees to strictly comply with all
                such laws and regulations and acknowledges that it has the responsibility to obtain such licenses to
                export, re-export, or import as may be required. Purchaser will indemnify and hold Company and all third
                party providers harmless from any and all claims, losses, liabilities, damages, fines, penalties, costs
                and expenses (including attorney’s fees) arising from or relating to any breach by Purchaser of its
                obligations under this Section.
              </li>
              <li><strong>FORCE MAJEURE.</strong> Neither party will be held responsible for failure or delay in the
                performance of any obligation under this Agreement, with the exception of the obligation to pay Fees, if
                such failure or delay is due to acts of God, war, terrorism, strikes, boycotts, labor disputes, fire or
                other loss of facilities, accident or any other cause beyond its control (each, a “Force Majeure”). If
                the performance of any obligation under this Agreement by either party is prevented, restricted or
                interfered with by reason of a Force Majeure event, the party whose performance is so affected, upon
                giving prompt notice to the other party, will be excused from such performance to the extent of such
                Force Majeure event, provided that the party so affected will take all reasonable steps to avoid or
                remove such causes of nonperformance and will continue performance hereunder with dispatch whenever such
                causes are removed.
              </li>
              <li><strong>NOTICE. </strong>All notices, reports, consents, authorizations and approvals to be given by a
                party under this Agreement will be in writing and will either be via: (1) hand-delivery; (2) reputable
                overnight mail service; (3) email; or (4) certified mail, return receipt requested, to the other party
                at its respective addresses set forth above. All notices will be effective upon receipt (or when
                delivery is refused), or 3 business days after being deposited in the mail as required above, whichever
                occurs sooner. Either party may change its address for notice by giving notice of the new address to the
                other party.
              </li>
              <li><strong>ASSIGNMENT &amp; TRANSFER. </strong>Notwithstanding the Use Site restrictions in Section 4.8
                above, this Agreement and any rights and obligations hereunder may not be transferred or assigned by
                either party, whether by operation of contract, law or otherwise, without the other party’s prior
                written consent, and any attempted assignment without such consent shall be null and void.
                Notwithstanding the foregoing, (i) such prior written consent shall not be required in connection with
                Company’s assignment of this Agreement in connection with the transfer or sale to a third party of all
                or substantially all of Company’s business that relates to this Agreement; and (ii) Company may
                subcontract its obligations under this Agreement without consent, provided that Company remains
                responsible for compliance with its obligations under this Agreement. For the avoidance of doubt,
                Purchaser hereby agrees that, without the prior written consent of Company, Purchaser shall not,
                directly or indirectly, sell, offer to sell, give, pledge, encumber, assign, grant any option for the
                sale of or otherwise transfer or dispose of, or enter into any agreement, arrangement or understanding
                to sell, any Company equipment or Services (collectively a, “Transfer”). Purchaser must notify Company a
                minimum of 30 days prior to any request to Transfer Company equipment or Services to an assignee of
                Purchaser (“Purchaser Assignee”). In the event that Company approves such a Transfer, Purchaser Assignee
                must execute an agreement that is identical to this Agreement (except to reflect the name of Purchaser
                Assignee). If Purchaser Assignee fails to execute such an agreement, Purchaser shall be responsible for
                all monies owed through the remainder of this agreement.
              </li>
              <li><strong>ADDITIONAL TERMS. </strong>Except as expressly set forth herein, this Agreement may be
                modified or amended only by a written agreement signed by both parties. If any provision of this
                Agreement is held to be unenforceable by a court of competent jurisdiction, such provision will be
                removed or replaced by a provision that most closely approximates the original intent and economic
                effect of the original to the extent possible under applicable law, and the remaining provisions will
                remain in full force and effect. The words “include,” “includes” and “including” means “include,”
                “includes” or “including,” in each case, “without limitation.” Except as provided for in this Agreement,
                no term of this Agreement will be construed to confer any third-party beneficiary rights on any non-
                party. All waivers under this Agreement must be in writing and signed by an authorized representative of
                the waiving party. Any waiver or failure to exercise any right under this Agreement will not be deemed a
                waiver of any other provision or of such provision on any other occasion. The preprinted terms of a
                purchase order or any other similar document will not apply to or modify this Agreement.
                <p>The parties are independent contractors, and nothing in this Agreement will be construed as creating
                  an employer-employee relationship, a partnership, or a joint venture between the parties. Neither
                  party is an agent of the other nor is neither party authorized to make any representation, contract,
                  or commitment on behalf of the other party. In the event of any litigation or other proceeding between
                  the parties relating to this Agreement, the prevailing party shall be entitled to reasonable
                  attorneys’ fees and other reasonable costs incurred in connection therewith and in pursuing
                  collection, appeals, and other relief to which that party may be entitled. Purchaser hereby grants
                  Company permission to use Purchaser’s name or logo for public press releases and customer stories.
                  Company provides the Company Systems, including related software and technology, for federal
                  government end use as a “Commercial Item” as that term is defined at 48 C.F.R. §2.101, consisting of
                  “Commercial Computer Software” and “Commercial Computer Software Documentation”, as those terms are
                  used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202. Consistent with 48 C.F.R. §12.212 or 48 C.F.R.
                  §227.7202-1 through 227.7202-4, as applicable, the Company Systems are provided to the Purchaser with
                  only those restricted rights as provided under the terms and conditions of this Agreement. If a
                  government agency has a need for rights not conveyed under these terms, it must negotiate with Company
                  to determine if there are acceptable terms for transferring such rights, and a mutually acceptable
                  written addendum specifically conveying such rights must be included in any applicable contract or
                  agreement.</p>
                <p>Effective 09/02/2022</p></li>
            </ol>
            <p>&nbsp;</p>
            <p><strong>Exhibit A: Leased Hardware Terms</strong></p>
            <p>The Leased Hardware Terms are incorporated by reference into the Agreement if, pursuant to an applicable
              Order Summary, Purchaser shall sublease Leased Hardware from Company during the Term of the Agreement.</p>
            <p><strong>Background</strong></p>
            <p>To provide Company’s customers with an alternative to the outright purchase of the Hardware required as
              part of the Company Systems, Company has entered into a relationship with certain third party financers
              (each, a “Financer”), by which the Financer, from time to time, provides for the financing of the purchase
              of certain Hardware, as such term is defined in the Agreement, from the manufacturers of such Hardware
              (each such manufacturer, a “Manufacturer”), and leases such Hardware to Company. The parties to the
              Agreement desire that Company (a) lease from the Financer the Leased Hardware described in the applicable
              Order Summary executed by the Purchaser, and (b) sub-lease such Leased Hardware to the Purchaser.</p>
            <p><strong>Terms </strong></p>
            <ol>
              <li><strong>Definitions. </strong>Capitalized terms used and not otherwise defined herein that are defined
                in the Agreement shall have the meanings given such terms in the Agreement.
              </li>
              <li><strong>Sublease. </strong>Company agrees (a) to lease from Financer the Leased Hardware identified in
                each applicable Order Summary and (b) to sublease to Purchaser such Leased Hardware in accordance with
                the terms and conditions set forth herein. Together with the Agreement and this Exhibit A, each Order
                Summary shall individually constitute a sublease agreement between Company and Purchaser (“Sublease“)
                with respect to the Leased Hardware specified in the Order Summary. A Sublease shall not become
                effective until the Order Summary is executed by Purchaser and Company.
              </li>
              <li><strong>Sublease Term.</strong></li>
            </ol>
            <p style="padding-left: 80px;"><strong>3.1</strong> The initial term for each Sublease shall commence on the
              Order Summary Effective Date and shall continue for thirty-six (36) months (such term of the Sublease, the
              “Initial Sublease Term”). Provided Purchaser is not in default under the Sublease, and unless otherwise
              stated in an applicable Order Summary, the Sublease Term shall automatically renew thereafter for
              additional twelve (12) month renewal periods (each such period a “Sublease Renewal Period” and together
              with the Initial Sublease Term, the “Sublease Term”) unless either party provides notice of termination.
            </p>
            <p style="padding-left: 80px;"><strong>3.2</strong> Notice of of Purchaser’s termination of each Sublease
              shall be provided to Company in writing at least ninety (90) days prior to the expiration of the Order
              Summary Term or, as applicable, each Sublease Renewal Period.</p>
            <ol start="4">
              <li><strong>Hardware Upgrade. </strong>From time to time, Company may, as part of the offerings and
                services related to the Company Systems, offer Hardware with enhanced functionality (“Upgraded
                Hardware”) for lease by Purchaser. Purchaser shall have the right to request an upgrade of the Leased
                Hardware to any Upgraded Hardware offered by Company (a “Hardware Upgrade Request”) at any time after
                the conclusion of the Initial Sublease Term. Provided that Purchaser is not in default under this
                Agreement, Company shall honor the Hardware Upgrade Request and provide Upgraded Hardware to Purchaser
                in accordance with the terms of the Sublease (a “Hardware Upgrade”). In order to receive Upgraded
                Hardware, Purchaser may be required to return existing Leased Hardware in accordance with instructions
                communicated to Purchaser by Company. Purchaser shall have the right to make additional Hardware Upgrade
                Requests every thirty-six (36) months after the date of Purchaser’s receipt of the Upgraded Hardware
                pursuant to a Hardware Upgrade Request (each such date, the “Delivery Date”). Upon each Delivery Date,
                the Sublease Term shall automatically be extended by an additional thirty-six (36) months from the
                Delivery Date.
              </li>
            </ol>
            <ol start="5">
              <li><strong>Rental Fees. </strong>Purchaser shall pay a monthly rental fee (“Rental Fee”) as set forth in
                each Order Summary and invoiced in accordance with the terms of the Agreement. In the event Purchaser
                does not timely make any payment of the Rental Fee or other monies due under this Exhibit A, Purchaser
                shall be liable to Company for a stipulated damage amount equal to 20% per annum (based on a year of 360
                days) of the amount of said payment and shall pay said amount immediately to Company.
              </li>
            </ol>
            <ol start="6">
              <li><strong>Use of Leased Hardware.</strong></li>
            </ol>
            <p style="padding-left: 80px;"><strong>6.1</strong> Purchaser shall use commercially reasonable efforts to
              ensure that all use of the Leased Hardware and all components and any other equipment used in any manner
              in connection with the operation and use of the Leased Hardware shall meet the specifications of
              Manufacturer. Specifications shall include but not be limited to Manufacturer’s warranty and required or
              recommended maintenance program.</p>
            <p style="padding-left: 80px;"><strong>6.2</strong> Purchaser shall be entitled to full time use of the
              Leased Hardware without extra charge by Company provided that Purchaser shall, at all times, use the
              Leased Hardware in accordance with Section 4 of the Agreement, including but not limited to the Use Site
              restriction terms in Section 4.8 thereof.</p>
            <p style="padding-left: 80px;"><strong>6.3</strong> Purchaser shall keep the Leased Hardware at all times in
              its sole possession and control or in the sole possession and control of its end-users. The Leased
              Hardware shall not be moved from the United States or Canada without the prior written consent of Company.
            </p>
            <p style="padding-left: 80px;"><strong>6.4</strong> Without the prior written consent of Company, Purchaser
              shall not make or permit to be made any alteration, attachment or addition to the Leased Hardware, except
              for the installation of such standard engineering changes as are customarily made without charge by
              Manufacturer under its basic maintenance program, and Purchaser shall cooperate so that such standard
              engineering changes, as part of Manufacturer’s maintenance program, may be promptly installed.</p>
            <p style="padding-left: 80px;"><strong>6.5</strong> Purchaser agrees that, other than replacements and
              repairs, any alteration, attachment or addition to the Leased Hardware shall be capable of being removed
              without material damage to or reduction in the value or impairment of the capability or efficiency of, the
              Leased Hardware, and that no alteration, attachment or addition shall reduce the value or impair the
              capabilities or efficiency of the Leased Hardware. Any item of the Leased Hardware replaced or substituted
              in connection with the alteration, attachment or addition shall remain the property of Company and shall
              be restored to the Leased Hardware in proper working order upon the termination of a Sublease at
              Purchaser’s expense.</p>
            <ol start="7">
              <li><strong><strong>Maintenance &amp; Repairs. </strong></strong>At all times during the term of the
                Sublease, Purchaser, at its expense, shall be responsible for maintaining and keeping the Leased
                Hardware in good working order, repair and condition and making all necessary adjustments, repairs, and
                replacements and shall use and/or require the Leased Hardware to be used in a manner consistent with the
                Manufacturer’s warranty and maintenance program.
              </li>
              <li><strong>Redelivery of Leased Hardware to Company</strong>. At the termination of the Agreement or a
                Sublease, Purchaser shall prepare the Leased Hardware for pick up by Company in accordance with the
                following procedures:
              </li>
            </ol>
            <p style="padding-left: 80px;"><strong>8.1</strong> By the end of the first business day following the
              termination of a Sublease (the “Pick-Up Date”), Purchaser, at its sole expense, shall ensure that the
              Leased Hardware is packed and crated for pick up by a third party carrier selected by Company. If the
              Leased Hardware is not ready for pick up by the carrier as of the Pick Up Date, and the parties hereto
              have not otherwise agreed in writing to an alternative pick up date, then Purchaser shall be liable to
              Company for additional pro-rata Rental Fees for each day during which the Leased Hardware is not ready for
              pick up by the carrier.</p>
            <p style="padding-left: 80px;"><strong>8.2</strong> Company shall be solely responsible and shall pay
              directly any costs and expenses incurred in respect to picking up the Leased Hardware for delivery to
              Company’s designated destination, and insurance on the Leased Hardware in route, upon termination of any
              Sublease or the Agreement.</p>
            <p style="padding-left: 80px;"><strong>8.3</strong> If the Sublease is terminated for Purchaser’s breach:
              (i) Purchaser shall ensure that the Leased Hardware is packed and crated for pick up by a third party
              carrier selected by Company within one (1) business day of such termination; and (ii) Section 8.2 shall
              not apply, and Company shall have the right to charge Purchaser for any costs and expenses incurred in
              respect to picking up the Leased Hardware. If the Leased Hardware is not packed and crated in a manner
              suitable for transportation via carrier by the end of the first business day following the termination of
              a Sublease for Purchaser’s breach, then Purchaser shall be liable to Company for additional pro-rata
              Rental Fees for each day during which the Leased Hardware is not so tendered.</p>
            <p style="padding-left: 80px;"><strong>8.4</strong> The Leased Hardware must be in the same operating order,
              repair, condition and appearance upon its return to Company as on the date of the Leased Hardware was
              provided to the Purchaser, reasonable wear and tear excepted. If upon inspection by Company, the Leased
              Hardware is deemed, in Company’s reasonable discretion, to require additional repairs or replacements,
              then Purchaser shall promptly pay to Company the cost of the repairs and replacements that are necessary
              or required for the Leased Hardware.</p>
            <p style="padding-left: 80px;"><strong>8.5</strong> Some or all of the Leased Hardware returned to Company
              at any time may contain sensitive personal information or personal files belonging to Purchaser (or to
              third parties such as Purchaser’s customers/clients/patients) that are stored or recorded in or on the
              Leased Hardware (the “Data”). Purchaser hereby agrees that before the Leased Hardware is shipped to or
              retrieved by Company or Company’s agents, Purchaser will, at Purchaser’s sole cost and expense, delete,
              and remove all such Data; provided, that Purchaser shall be required to perform this responsibility in a
              manner that ensures that all hard drives and other data retention components of the Leased Hardware must
              function as originally installed, and shall be responsible for the cost of repair or replacement of the
              Leased Hardware if such hard drives or other data retention components no longer function as originally
              installed as a result of Purchaser’s deletion or removal of the Data. Purchaser hereby acknowledges that
              it has sole responsibility to so destroy, delete, and remove all such Data and that Company has absolutely
              no liability for any Data that Purchaser fails to so destroy, delete, or remove.</p>
            <ol start="9">
              <li><strong>Insurance</strong>. At its own expense, Purchaser shall maintain adequate and complete public
                liability insurance to cover its liability with respect to the possession or operation of the Leased
                Hardware and the premises at which the Leased Hardware is located.
              </li>
              <li><strong>Ownership and Inspection. </strong></li>
            </ol>
            <p style="padding-left: 80px;"><strong>10.1</strong> Purchaser understands and agrees that it has not, and
              by the execution of the Agreement, it does not have or obtain, and by payments and performance hereunder,
              it does not and will not have or obtain any title to the Leased Hardware.</p>
            <p style="padding-left: 80px;"><strong>10.2</strong> Purchaser shall immediately notify Company of all
              details concerning any claim of damage or loss arising out of the use, manufacture, functioning or
              operation of the Leased Hardware.</p>
            <p style="padding-left: 80px;"><strong>10.3</strong> Purchaser shall keep the Leased Hardware free and clear
              of all liens, encumbrances and claims of any kind and nature..</p>
            <ol start="11">
              <li><strong>No Warranties</strong>. Purchaser acknowledges and agrees that Company does not manufacture
                the Leased Hardware and does not represent any <strong>EXCEPT AS OTHERWISE PROVIDED FOR IN THE
                  AGREEMENT, COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO THOSE WITH RESPECT TO THE CONDITION OR PERFORMANCE OF THE LEASED HARDWARE, ITS
                  MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OR WITH RESPECT TO PATENT INFRINGEMENT OR THE
                  LIKE. COMPANY IS NOT RESPONSIBLE FOR ANY REPAIRS, SERVICE OR DEFECTS IN THE LEASED HARDWARE OR THE
                  OPERATION THEREOF. </strong></li>
              <li><strong>Security Interest and/or Assignability.</strong> At any time and from time to time. Company
                may assign the rents and other sums at any time due or to become due or at any time owing or payable by
                Purchaser to Company under any Sublease. Any assignment shall be in respect of any Sublease and/or the
                Rental Fees and other sums due and to become due in respect of the Leased Hardware, and may be either
                absolute or as collateral security for any obligation of Company. Any assignment shall not be binding on
                Purchaser until written notice has been given to Purchaser by Company and the assignee (“Secured
                Party“). From and after the receipt by Purchaser of written notice, Secured Party shall not be obligated
                to perform any duty, covenant or condition required to be performed by Company under any Sublease, but
                on the contrary. Purchaser, by its execution hereof, acknowledges and agrees that notwithstanding any
                such assignment, all such duties, covenants or conditions required to be performed by Company shall
                survive any such assignment and shall be and remain the sole liability of Company and of every person,
                firm or corporation succeeding (by merger, consolidation, purchase of assets or otherwise) to all or
                substantially all of the business assets or goodwill of Company. Without limiting the foregoing.
                Purchaser further acknowledges and agrees that the rights of Secured Party in and to the sums payable by
                Purchaser under any Sublease (including, without limitation, Rental Fees) shall not be subject to any
                abatement whatsoever, and shall not be subject to any defense, set-offs, counterclaim or recoupment
                whatsoever whether by reason of failure of or defect in Company’s title or any failure of Company to
                perform any of its obligations hereunder or any interruption from whatsoever cause in the use, operation
                or possession of the Leased Hardware or any part thereof or any damage to or loss or destruction of the
                Leased Hardware or any part thereof or by reason of any other indebtedness or liability, howsoever and
                whenever arising, of Company to Purchaser or to any other person, firm or corporation or to any
                governmental authority or for any cause whatsoever. It is the intent hereof that Purchaser shall be
                unconditionally and absolutely obligated to pay Secured Party all of the rents.
              </li>
              <li><strong>Default &amp; Remedies. </strong>Upon Purchaser’s breach of the Agreement, Company may at its
                option do one or more of the following with respect to any or all Leased Hardware as Company in its sole
                discretion shall elect: (a) cause Purchaser to (and Purchaser agrees that it will), upon written demand
                of Company and at Purchaser’s expense, promptly return the Leased Hardware to Company in accordance with
                all of the terms of Section 8 hereof, or Company, at its option, may enter upon the premises where
                Leased Hardware is located and take immediate possession of and remove the same, all without liability
                to Purchaser for damage to property or otherwise. If for any reason the Leased Hardware is not returned
                or Company is not able to recover possession of the Leased Hardware, Purchaser agrees to immediately pay
                to Company the then “Fair Market Retail Value” (as defined below in this Section 13) of the Leased
                Hardware; (b) sell or lease any or all of the Leased Hardware at public or private sale, with or without
                notice to Purchaser or advertisement, or otherwise dispose of, hold, use, operate or keep idle the
                Leased Hardware, all as Company in its sole discretion may determine and all free and clear of any
                rights of Purchaser and without any duty to account to Purchaser for such action or inaction or for any
                proceeds with respect thereto; (c) by written notice to Purchaser, cause Purchaser to (and Purchaser
                agrees that it will) pay to Company (as liquidated damages for loss of a bargain and not as a penalty)
                on the date specified in such notice an amount equal to the present worth of all unpaid Rental Fees,
                plus any other monies due or accrued hereunder up to date of actual payment; and/or (d) Company may
                exercise any other rights or remedies which may be available to it under the Uniform Commercial Code or
                any other applicable law or proceed by appropriate court action to enforce the terms hereof or to
                recover damages for the breach hereof or to rescind any Sublease as to any or all Leased Hardware. In
                addition. Purchaser shall continue to be liable for all indemnities under any Sublease, and for all
                legal fees and other costs and expenses resulting from the foregoing defaults or the exercise of
                Company’s remedies, including without limitation placing any Leased Hardware in the condition required
                by Section 8 hereof. “Fair Market Retail Value” is defined as that purchase price that would be obtained
                in an arm’s length retail transaction between informed and willing parties under no compulsion to buy or
                sell. No right or remedy referred to in this section is intended to be exclusive, but each shall be
                cumulative and in addition to any other right or remedy referred to above or otherwise available to
                Company at law or in equity. Purchaser hereby waives any rights now or hereafter conferred by statute or
                otherwise which may require Company to sell, lease or otherwise use or deal with any Leased Hardware in
                mitigation of Company’s damages as set forth in this section or which may otherwise limit or modify any
                of the Company’s rights or remedies under this section.
              </li>
            </ol>
            <p>&nbsp;</p>
            <p><strong>Exhibit B: Cellular Terms</strong></p>
            <p>This Exhibit B&nbsp;(the “Cellular Terms”) are incorporated by reference into the Agreement if the
              Purchaser’s purchase of Company Services includes the use of cellular services or data (“Cellular
              Service”).</p>
            <p>The Company Services and Hardware may not support all uses of the Cellular Service permitted by the
              cellular carrier. The cellular carrier’s permitted uses of the Cellular Service include:</p>
            <ul>
              <li>Voice calls;</li>
              <li>Web browsing;</li>
              <li>Messaging;</li>
              <li>Email;</li>
              <li>Streaming music;</li>
              <li>Uploading and downloading applications and content to and from the Internet or third party stores;
              </li>
              <li>Using applications and content without excessively contributing to network congestion; and</li>
              <li>Tethering Hardware to other non-harmful Hardware pursuant to the terms and conditions and allotments
                of a Data Plan (as defined below).
              </li>
            </ul>
            <p>Purchaser is not permitted to use the Cellular Service in a way that iN2L or any cellular carrier
              determines, in either parties’ sole discretion:</p>
            <ul>
              <li>Uses a repeater or signal booster other than one Company provides;</li>
              <li>Uses the Cellular Service for machine to machine based remote monitoring to provide life-sustaining
                medical care for any individual, including without limitation, in health care and assisted living
                environments;
              </li>
              <li>Uses the Cellular Service for the sale of any type of calling card product or service, including, but
                not limited to, any ‘grab-and-go’ or rechargeable product with a pin code that allows individuals to
                purchase and/or refill minutes, internet access features or service;
              </li>
              <li>Uses, or attempts to use, the Cellular Service for voice communications on a “white label” SIM card,
                or in any manner that creates, or appears to create a new “brand” of wireless service;
              </li>
              <li>Uses the Cellular Service for monitoring third parties without their permission, including, but not
                limited to, prisoner and parolee monitoring;
              </li>
              <li>Uses Hardware that utilizes a SIM to make voice calls primarily over a Wi-Fi network, including,
                without limitation, the use of any existing add-on feature that allows Wi-Fi calling capability; Uses
                Hardware that utilizes a SIM to make voice calls primarily over a Wi-Fi network. Wi-Fi calling
                capability may be offered on a voice Rate Plan as an ancillary offering only;
              </li>
              <li>Modifies tthe Cellular Service in any manner, including, but not limited to, combining to include any
                third-party products, services, features or functionalities that are not included in the Cellular
                Service standing alone (“Bundled Service”) without prior written approval from a Vice President from the
                applicable cellular carrier;
              </li>
              <li>Resells the Cellular Services or Hardware to any government end user or subscriber, including, but not
                limited to federal, state, and local governmental entities;
              </li>
              <li>Resells the Cellular Service or Hardware by promoting any specific feature that may be included with
                the Rate Plan other than base voice or internet access Service usage allotments that are provided for
                domestic use with each Rate Plan.
              </li>
              <li>Compromises network security or capacity, degrades network performance, uses malicious software or
                “malware”, hinders other customers’ access to the network, or otherwise adversely impacts network
                service levels or legitimate data flows;
              </li>
              <li>Uses applications which automatically consume unreasonable amounts of available network capacity;</li>
              <li>Uses applications which are designed for unattended use, automatic data feeds, automated
                machine-to-machine connections, or applications that are used in a way that degrades network capacity or
                functionality;
              </li>
              <li>Misuses the Service, including “spamming” or sending abusive, unsolicited, or other mass automated
                communications;
              </li>
              <li>Accesses the accounts of others without authority;</li>
              <li>Results in more than 50% of voice and/or data usage being Off-Net (i.e., connected to another cellular
                carrier’s network) for any 2 billing cycles within any 12-month period;
              </li>
              <li>Results in unusually high usage (specifically, more than 50GB (updated periodically) in a month) and
                the majority of data usage being Smartphone Mobile HotSpot (tethering) usage for any 3 billing cycles
                within any 6-month period;
              </li>
              <li>Resells the Cellular Service without authorization, either alone or as part of any other good or
                service;
              </li>
              <li>Tampers with, reprograms, alters, or otherwise modifies Hardware to circumvent any of our policies or
                violate anyone’s intellectual property rights;
              </li>
              <li>Causes harm or adversely affects Company, the carrier, the Cellular Service, other customers,
                employees, business, or any other person;
              </li>
              <li>Conflicts with applicable law;</li>
              <li>Is not in accordance with the Agreement;</li>
              <li>Attempts or assists or facilitates anyone else in any of the above activities; or</li>
              <li>In other ways as Company or the Carrier may describe from time to time.</li>
            </ul>
            <p><strong>Relationship with Carrier</strong></p>
            <p>Purchaser has no contractual relationship with, and is not a third-party beneficiary of, any agreement
              between Company and any carrier. Purchaser agrees that the carrier will have no legal, equitable or other
              liability of any kind to the Purchaser.</p>
            <p><strong>Privacy Policy</strong></p>
            <p>Purchaser understands and agrees that personal data generated or collected by the carrier related to the
              provision of the Cellular Services will be governed by the privacy policy located at
              https://www.ultramobile.com/privacy-policy/, as amended from time to time, and that any and all claims
              regarding use of such personal data will be governed by that privacy policy.</p>
            <p><strong>Numbers</strong></p>
            <p>Subject to FCC Number portability rules, Purchaser has no property or other rights in any assigned number
              and such number can be changed at any time.</p>
            <p><strong>Interruptions</strong></p>
            <p>Purchaser understands Cellular Service may be temporarily refused, interrupted, curtailed or limited
              because of atmospheric, terrain, or other natural or artificial conditions and may be temporarily
              interrupted or curtailed due to usage concentrations, modifications, upgrades, relocation and repairs of
              the transmission network. Purchaser agrees that the wireless service carrier or Company will not be
              responsible for such interruptions of the Cellular Service or the inability to use the Cellular Service
              outside the authorized areas.</p>
            <p><strong>Security</strong></p>
            <p>Purchaser understands that the wireless service carrier or Company cannot guarantee the security of
              wireless transmissions and will not be liable for any lack of security relating to the use of the Cellular
              Service.</p>
            <p><strong>Cellular Service Limitation of Liability</strong></p>
            <p>Purchaser understands and agrees that the liability and obligations of Company to Purchaser under the
              Agreement may be strictly controlled and limited by the wireless service carrier’s tariff, if any, and the
              laws, rules and regulations of the FCC and other United States or foreign governmental authorities which
              from time to time have jurisdiction. In any event, regardless of the form of action, whether for breach of
              contract, warranty, negligence, strict liability in tort or otherwise, Purchaser’s exclusive remedy and
              the total liability of the wireless service carrier, Company, and/or any supplier of services to Company
              arising in any way in connection with the Cellular Service, for any cause whatsoever, including, but not
              limited to, any failure or disruption of Service provided, will be limited to payment by Company of
              damages in an amount equal to the amount charged to Purchaser for the Cellular Service provided under the
              Agreement. In no event will Company and/or the wireless service carrier be liable for any cost, delay,
              failure or disruption of the Cellular Service, lost profits, or incidental, special, punitive or
              consequential damages. Company and/or the wireless service carrier will not be liable for the failure or
              incompatibility of Hardware in connection with the Cellular Service. Purchaser will use Hardware at its
              own risk.</p>
            <p><strong>Cellular Indemnification</strong></p>
            <p>Purchaser will indemnify, defend and hold Company, the wireless service carrier and the officers,
              employees and agents of each of them harmless from and against all claims, causes of action, losses,
              expenses, liability or damages (including reasonable attorneys’ fees and costs), and including without
              limitation for any personal injury or death, arising in any way directly or indirectly in connection with
              the Cellular Services. This provision will survive the termination of the Agreement.</p>
            <p><strong>Suspension</strong></p>
            <p>Cellular Service may be temporarily suspended or permanently terminated without notice if Company’s
              agreement with the wireless service carrier is terminated for any reason, or the Purchaser violates the
              Agreement, or the network rules and policies. Purchaser waives any and all claims against the underlying
              wireless service carrier, including any roaming carrier, for such suspension or termination.</p>
            <p><strong>What is a Rate Plan?</strong></p>
            <p>“Rate Plans” include Cellular Service allotments, for example, for minutes, messages or data, rates, and
              other terms. The Cellular Service carrier may introduce access to new technologies, features, or services
              that Purchaser can add for an additional charge. If any term in Purchaser’s Rate Plan conflicts with this
              Agreement, the term in the Rate Plan governs.</p>
            <p><strong>How will I be charged for data usage?</strong></p>
            <p>Data service may be included in the Rate Plan or data add-on or Purchaser may be charged for data usage
              on a pay per use basis (“Data Plan”). Without a Data Plan, Hardware may not be able to access Cellular
              Service.</p>
            <p><strong>Where, how, and when does my Cellular Service work?</strong></p>
            <p>These Cellular Terms describe the Cellular Service experience, including information about network
              management practices.</p>
            <p>Experience with the Cellular Service may vary and change without notice depending on a variety of
              factors. Purchaser agrees that neither Company nor the carrier are liable for problems relating to
              Cellular Service availability or quality.</p>
            <p>Cellular Service will operate only after the purchase and activation of a Rate Plan.</p>
            <p><strong>Charges.</strong> Purchaser agrees to pay all charges billed or accepted or processed through
              Purchaser Hardware. Purchaser agrees to provide Company with accurate and complete billing information and
              to immediately report all changes in billing information.</p>
            <p><strong>Data Usage and Messaging.</strong> Rate Plans may include a data plan (“Data Plan”) as part of
              the Cellular Service. Data usage is rounded up to the next full-kilobyte increment at the end of each data
              session. 1 gigabyte of data is equivalent to 1,000 megabytes. Data usage includes, among other things,
              text, web browsing, instant or picture messages, and email whether read or unread, sent or received,
              solicited or unsolicited. Company and carrier do not guarantee that Purchaser will not receive spam or
              other unsolicited messages, and neither Company nor Carrier are liable for such messages. All data
              purchased with a Rate Plan (both data that comes with a Rate Plan and any additional data purchased as an
              add-on) will expire immediately upon termination of the Rate Plan for any reason.</p>
            <p><strong>Permissible and Prohibited Uses. </strong>Data Plans are intended for the approved uses in the
              Agreement. Examples of prohibited uses can be found in the Agreement and these Cellular Terms.</p>
            <p><strong>Data Usage Level.</strong> The carrier has set a 4G data usage level (“Usage Level”) for each
              Rate Plan based on plan period, except for its Pay-Per-Use plans. “4G” means minimum data speeds equal to
              the lesser of (i) an average of 1.0 mbps over a plan period service term, or (ii) the average Cellular
              Service network speed in the market over a plan period service term as dictated by the carrier (in its
              exclusive control). The carrier measures upload and download data usage (“Actual Usage”) to determine if
              total Actual Usage, as aggregated over the applicable plan period (“Usage Total”), exceeds the plan
              period’s 4G Usage Level for the Rate Plan selected. Please note that Actual Usage includes requests to
              upload or download data, whether or not such data is actually uploaded or downloaded, as well as Cellular
              Service overhead. For example, if a request is made that an image be downloaded to a Hardware, but the
              Hardware travels outside of the Network coverage area before the download is complete, such request will
              be included in the Actual Usage even though the image was never downloaded to the Hardware. For Rate Plans
              that include a finite amount of data, data will be suspended once the plan period data limit is reached
              and reset upon the commencement of the following plan period’s beginning. If a Rate Plan includes
              unlimited data, when the Rate Plan’s Usage Level is exceeded, the data speed may be reduced until the end
              of the applicable plan period. Continued high volume data use after the initial reduction of data speed
              may result in further reduction of data speed to 128 kbps. Once a new plan period is begun, the Rate Plan
              Usage Level will be reset and upload and download speeds will be restored. For example, if a customer
              purchases a Rate Plan that includes unlimited data service, but only includes up to 1 gigabyte of high
              speed data at 4G speeds during a given plan period, then the first gigabyte of data requested by that
              Customer in that plan period will be provided at up to 4G speeds (subject to 4G Cellular Service
              availability and the actual speeds of the carrier). Any data uploaded or downloaded in excess of 1
              gigabyte will be provided at reduced speeds. Please be aware that Usage Level is much more likely to
              exceed a Rate Plan’s plan period Usage Level if streaming video is used, or if significant quantities of
              music files, movies, or software applications are downloaded, or if other high-bandwidth activities are
              undertaken.</p>
            <p><strong>Protective Measures.</strong> To provide a good experience for the majority of our customers and
              minimize capacity issues and degradation in network performance, the carrier may take measures including
              temporarily reducing data throughput for a subset of customers who use a disproportionate amount of
              bandwidth. If use of a Data Plan could interfere with other customers’ service, affect the carrier’s
              ability to allocate network capacity among customers, or degrade service quality for other customers, the
              carrier may suspend, terminate, or restrict such data session, or switch the user to a more appropriate
              Data Plan which may result in an increased cost. The network is managed to facilitate the proper
              functioning of services that require consistent high speeds, such as video calling, which may,
              particularly at times and in areas of network congestion, result in reduced speeds for other services.
              Additionally, other network management practices may be implemented, such as caching less data, using less
              capacity, sizing video more appropriately for a Hardware to transmit data files more efficiently, and
              deploying streaming video optimization technology, which may affect the performance and download times of
              data-heavy activities such as video-streaming on some unlimited plans. Streaming video optimization
              technology is intended to manage data usage on the Network, reduce the risk of streaming video stalling
              and buffering, and reduce the amount of high-speed data consumption used for streaming video. Streaming
              video optimization improves streaming video reliability as well as makes room for other users to enjoy
              higher browsing speeds. Detectable video may typically stream at DVD quality or Standard Definition.</p>
            <p><strong>Wi-Fi Features.</strong> Carrier, at its sole discretions, may make available Wi-Fi voice and
              text messaging services, i.e., the ability to originate and terminate calls and text messages over a Wi-Fi
              connection (“Wi-Fi Calling”). If offered, Wi-Fi Calling will only be available for those that (i) have a
              Wi-Fi capable Hardware with carrier supported Wi-Fi calling capability, (ii) have Wi-Fi Calling service
              provisioned on their account, (iii) have a compatible SIM card, and (iv) are connected to functioning
              third-party internet service. Not all services available on the carrier’s network are available while
              using Wi-Fi Calling. For example, emergency alerts may not be available with Wi-Fi Calling. Be aware that
              calling 9-1-1 via Wi-Fi Calling uses the internet and operates differently than traditional 9-1-1. For
              example, 9-1-1 may not work during power or internet outages or disruptions, or if internet or Cellular
              Service is suspended. Location information when using Wi-Fi Calling may be limited or unavailable. When a
              call to 9-1-1 is made over Wi-Fi, the Carrier may have no or very limited information about the caller’s
              location. Neither Company nor the carrier is responsible or liable for anything related to the use of or
              inability to use any Wi-Fi Calling, including, without limitation, any failure of emergency calls (whether
              9-1-1 calls or otherwise). Wi-Fi Calling may decrement Rate Plan minutes. Most Hardware will not
              transition between Wi-Fi and the wireless Network. Hardware using wireless connections may be vulnerable
              to unauthorized attempts to access data and software stored on the Hardware.</p>
            <p><strong>Downloadable Content and Applications.</strong> Content or applications (e.g., downloadable or
              networked applications, wallpapers, ringtones, games, and productivity tools) (collectively,
              “Content &amp; Apps”) that can be purchased or download with Hardware are not sold or offered by Company
              or the carrier, and neither are responsible for the Content &amp; Apps, including download, installation,
              use, transmission failure, interruption, or delay, or any content or website accessible through the
              Content &amp; Apps. Unless otherwise stated, any support questions for these Content &amp; Apps may be
              directed to the third-party seller. When using, downloading or installing Content &amp; Apps sold by a
              third-party seller, the user may be subject to license terms, terms of use, a privacy policy and/or other
              policies with that third party. Content &amp; Apps purchased from third parties are licensed for personal,
              lawful, non-commercial use on that Hardware only. Content &amp; Apps may not be transferable from one
              Hardware to other Hardware. Some Hardware or Content &amp; Apps may continue to have contact with the
              Cellular Service without the user’s knowledge, which may result in additional charges. Software on a
              Hardware may automatically shut down or limit the use of Content &amp; Apps or other features or services
              without warning. Company and Carrier are not responsible for any third-party content, advertisements, or
              websites accessible from the Hardware.</p>
            <p><strong>Use of Information.&nbsp;</strong>Visiting any third-party website or app store, or downloading
              or using any Content &amp; Apps, may result in third parties being able to access, collect, use or
              disclose personal or company information or require the carrier to disclose such information, including
              location information (when applicable) to the Content &amp; Apps distributor or some other third party. By
              accessing or using any Content &amp; Apps through the Cellular Service, Company and the carrier may
              provide information related to such use to third parties. Use of Content &amp; Apps is subject to the
              third party’s terms and conditions and policies, including its privacy policy. Please refer to the
              Content &amp; Apps creator/owner’s privacy policy for information regarding their use of information
              collected when downloading, installing, or using any third-party Content &amp; Apps. Neither Company or
              Carrier are responsible for any transmission failure, interruption, or delay related to
              Content &amp; Apps, or any content or website accessible through the Content &amp; Apps.</p>
            <p>Hardware may connect to another provider’s network even within the carrier’s coverage area. Check the
              Hardware to determine if it is roaming. There may be extra charges (including long distance, tolls, data
              usage) and higher rates for roaming usage, and quality and availability of the Cellular Service may vary
              significantly. If made available, roaming charges and rates are subject to change at any time.</p>
            <p><strong>Prioritization.&nbsp;</strong>To provide the best possible experience for the most possible users
              of Rate Plans, for the vast majority of Rate Plans carrier may prioritize the data usage of a small
              percentage of heavy data users, specifically those using more than 30GB of data in a billing cycle, below
              that of other data users. This threshold number is periodically evaluated and may change over time.
              Carrier also may prioritize the data of users who choose certain Rate Plans after the data for other Rate
              Plans, but before users who are prioritized as heavy data users. Users whose data is prioritized lower may
              notice speeds lower than those users with higher priority in times and locations where there are competing
              demands for Cellular Service resources. Carrier may prioritize smartphone and mobile internet (tablet)
              over Smartphone Mobile HotSpot (tethering) traffic on the Network.</p>
            <p>Streaming video optimization technology may be used in the Network to help minimize data consumption
              while also improving the service experience for all users. Additionally, the carrier may implement other
              network practices to ensure optimized network performance as technologies evolve.</p>
            <p><strong>*What are the permitted and prohibited uses for Hardware and the Cellular Services?</strong></p>
            <p>The Cellular Service is a shared resource, which is managed for the benefit of all of users. Data Plans
              are intended for web browsing, messaging, and similar activities. Certain activities and uses of the
              Cellular Services and Hardware are permitted and others are not.</p>
            <p><strong>*What happens if a Hardware is lost or stolen?</strong></p>
            <p>Purchaser agrees to notify the carrier if a Hardware is lost or stolen. Once notified, applicable
              Cellular Service will be suspended. After the Cellular Service is suspended, Purchaser will not be
              responsible for additional usage charges incurred in excess of Rate Plan charges, and applicable taxes and
              surcharges. If Purchaser’s Cellular Service is not suspended, Purchaser will remain responsible for all
              usage and charges incurred and applicable taxes and surcharges. The carrier may prevent a lost or stolen
              Hardware from registering on any network. California Customers: For charges incurred before carrier is
              notified, the Purchaser is not liable for charges Purchaser did not authorize, but the fact that the
              Purchaser’s Hardware or account was used is some evidence of authorization. Purchaser may request that the
              carrier investigate charges the Purchaser believes were unauthorized. The carrier may ask the Purchaser to
              provide information to support such request. If carrier determines the charges were unauthorized, the
              carrier will credit back such charges. If carrier determines the charges were authorized, the carrier will
              inform the Purchaser within thirty (30) days and the Purchaser will remain responsible for the
              charges.</p>
            <p><strong>*How will Purchaser be billed for use of the Cellular Services?</strong></p>
            <p><strong>Pursuant to the Agreement.</strong> Purchaser also agrees to pay all charges that were accepted
              or processed through all Purchaser’s Hardware.</p>
            <p><strong>Off-Rate Plan Charges.</strong> Purchaser may have to pay extra for calls to some numbers (e.g.,
              conference &amp; chat lines, broadcast, calling card, international, 900 or 976 calls, etc.). Purchaser
              agrees to provide carrier with accurate and complete billing and tax related information and to report all
              changes within 30 days of the change.</p>
            <p><strong>Late Payment.&nbsp;</strong>For Cellular Services, Company may charge a late fee of the greater
              of 1.5% per month (18% annually), subject to the maximum allowed by law. If Purchaser fails to pay on time
              and Company refers Purchaser’s account to a third party for collection, a collection fee will be assessed
              by the carrier and will be due at the time of the referral to the third party. The fee will be calculated
              as a percentage of the amount due to the extent permitted, or not otherwise prohibited, by applicable law.
              Acceptance of late or partial payments does not waive Purchaser’s responsibility to pay the full amount
              owed, including late fees. Late payment, non-payment and/or collection fees are intended to be a
              reasonable advance estimate of actual costs resulting from late payments and non-payments; these costs are
              not readily ascertainable and are difficult to predict or calculate at the time that these fees are set.
            </p>
            <p><strong>*License.</strong> Hardware software is licensed, not sold, to Purchaser by Company and/or other
              licensors for use as intended by the Agreement. Purchaser may only use the software as authorized by its
              license. Hardware software includes its software, interfaces, documentation, data, and Content &amp; Apps,
              as each may be updated or replaced by feature enhancements or other updates.</p>
            <p><strong>*Consent to be Contacted.&nbsp;</strong>Company or Carrier may contact the Purchaser without
              charge, on any wireless telephone number assigned to the Purchaser account for any purpose, including
              marketing, and in any manner permitted by law. Purchaser expressly consents to be contacted for any
              purpose, including billing, collection, or other account or service related purpose, at any telephone
              number or physical or electronic address where purchaser may be reached, including any wireless telephone
              number.</p>
            <p><strong>Emergency Alerts.</strong> The carrier participates in the wireless emergency alerts program
              administered by the federal government within portions of the Cellular Service. This allows federal,
              state, and local government agencies to send alerts about local emergencies to customers in specifically
              defined geographic areas. Wireless alert capable Hardware with appropriate notification settings are
              required for the service. There is no additional charge for these wireless emergency alerts.</p>
            <p><strong>911 Access.&nbsp;</strong>911 services are made possible by state and local governments.
              Purchaser should check to see its Hardware is capable of making calls to 911 in the United States. The
              Hardware must have battery power and Network connectivity to complete a 911 call. When making 911 calls,
              be prepared to provide location information. Other third-party entities are involved in connecting a 911
              call and the carrier does not determine the public safety agency to which 911 calls are routed. If porting
              a phone number to or from the carrier, while the port is in process, some services may be unavailable,
              such as 911 location services. Callers outside of the U.S., may have to dial a different number than 911
              to call emergency services.</p>
            <p><strong>*DISCLAIMER OF WARRANTIES.&nbsp;</strong>Except for the express warranties in the Agreement and
              any written warranty that may be provided with a Hardware, and to the extent permitted by law, the
              Cellular Services are provided on an “as is” and “with all faults” basis and without warranties of any
              kind. Neither Company nor carrier make any representations or warranties, express or implied, including
              any implied warranty of merchantability or fitness for a particular purpose concerning the Cellular
              Service or Hardware, nor promise uninterrupted or error-free service or authorize anyone to make any
              warranties on their behalf. This doesn’t deprive Purchase of any warranty rights it may have against
              anyone else. The carrier does not guarantee that communications will be private or secure; it is illegal
              for unauthorized people to intercept communications, but such interceptions can occur.</p>
            <p>Services or software provided by third parties (including voice applications), 911 or E911, text to 911,
              or other calling or messaging functionality, may work differently than services offered by the carrier, or
              may not work at all. Please review all terms and conditions of such third-party products. When using these
              products, the carrier is not responsible for the availability or reliability of 911 calls or text to 911
              messages, or if inaccurate location information is provided to the 911 Communications Center. Purchaser is
              responsible for any download, installation, use, transmission failure, interruption, or delay related to
              Content &amp; Apps, or any third-party content, services, advertisements, or websites accessible by using
              Hardware or the Cellular Services. Purchaser is responsible for maintaining virus and other internet
              security protections when accessing third party Content &amp; Apps or other services.</p>
            <p>&nbsp;</p>
            <p>Last updated 09/14/2022</p>`
  return (
    <SiteWrapper>
      <Layout>
        <Section width="medium">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>

        </Section>
      </Layout>
    </SiteWrapper>
  );
}
