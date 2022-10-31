import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export const TermsOfService: React.FC = () => {
  return (
    <Box>
      <Box marginRight={"10"} paddingTop={"5"} marginLeft={"5"}>
        <Box marginTop={"10"} w="full" bg="teal" px="100px" py="40px">
          <Flex justifyContent="space-between" alignItems="center" pb="30px">
            <Heading color="whiteAlpha.900">Terms of use of the site</Heading>
          </Flex>
        </Box>
        <Flex>
          <Box
            bg={"whiteAlpha.100"}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            p={50}
            boxShadow="lg"
          >
            <Box>
              <Text fontSize="2xl" as="i" pb="20px">
                Summary of terms and conditions
              </Text>
              <Text fontSize="lg">
                PECF is a technology company that offers services mainly related
                to e-commerce and digital payments. Marketplace is an e-commerce
                platform where Users can sell and buy products using different
                payment and shipping solutions.At Marketplace VIS, we connect
                people interested in making transactions with vehicles, real
                estate and services with potential seller. In order to operate
                in the platform all Users must accept the Terms and Conditions,
                the the annexes and the Privacy Statement. Those with legal
                capacity and duly authorized minors may operate within PECF.
                Each user is responsible for the personal data that he/she
                provides at the time of registration and is obliged to keep them
                updated. In addition, he/she is the sole responsible for the use
                and safekeeping of his or her password. in some cases, we may
                charge a fee for the use of the services that integrate the PECF
                ecosystem, which the User agrees to pay.
              </Text>
              <br />
              <br />
              <Text fontSize="2xl" as="i" pb="20px">
                Terms and Conditions
              </Text>
              <Text fontSize="lg">
                These terms and conditions and the annexes that explain PECF
                services (hereinafter: “Terms and Conditions”) regulate the
                relationship between PECF and the people who use its services
                (“Users”). Users accept these Terms and Conditions from the
                moment they are registered in the site and use the PECF
                Ecosystem. When we should make changes important in our
                services, we will publish the modifications 10 calendar days in
                advance so that the Users can review them and continue to use
                the PECF Ecosystem. The term will be 5 calendar days in case we
                have to update the rates for our services. In no case will they
                affect the operations that have already been completed. Users
                who have no outstanding obligations to PECF or other users may
                terminate their relationship with PECF by canceling their
                account.
              </Text>
              <br />
              <br />
              <Text fontSize="2xl" as="i" pb="20px">
                Capacity
              </Text>
              <Text fontSize="lg">
                Our services may be used by persons of legal age who have the
                legal capacity to have contract. Minors, from 13 years of age 13
                years of age, may only use their account with the authorization
                of the legal representative, who will be responsible for all
                actions and obligations arising the use of that account and who
                must ensure responsible and appropriate use of the account in
                accordance with the maturity of the minor authorized. Whoever
                uses the PECF Ecosystem on behalf of a company shall have
                capacity to contract on behalf of it. In addition, to be able to
                use the account, the User must be active.
              </Text>
              <br />
              <br />
              <Text fontSize="2xl" as="i" pb="20px">
                Registration and Account
              </Text>
              <Text fontSize="lg">
                If you want to use our services, you must fill in the
                registration form with the required data. By completing the
                form, you you undertake to do so in an accurate, precise and
                true manner and to keep his data always up to date. The User
                will be the sole responsible for the accuracy of his
                registration data. notwithstanding the information provided in
                the form, we may request and/or consult additional to
                corroborate the User´s identity. The account is personal, unique
                and non-transferable, that is to say that under no circumstances
                may it be sold to another person. It can be accessed with the
                personal security password that you have chosen and that you
                must keep strictly confidential. The user can create
                collaborating accounts and define their access permissions. In
                any case, the user will be the only one responsible for the
                operations that are carried out on his/her account. In case of
                detecting an unauthorized use of your account, you must notify
                immediately and reliably to PECF. We may reject a registration
                request or cancel an accepted registration, without registration
                already accepted, without giving rise to any right to
                compensation. Will not be able to register again on the Site
                Users who have been previously disqualified. Nor Users who are
                included or related to persons included in national or
                international sanction lists . In addition, in case of detecting
                the use of more than one account, we may apply withholdings,
                debits and/or any other measure if we consider that such action
                may we consider that such action may be detrimental to the rest
                of the people using who use the Site.
              </Text>
              <br />
              <br />
              <Text fontSize="2xl" as="i" pb="20px">
                Data Privacy
              </Text>
              <Text fontSize="lg">
                At PECF we use personal information responsibly, protecting the
                privacy of the Users who entrust us with their data and taking
                the necessary measures to guarantee the security of PECF.
              </Text>
              <br />
              <br />
              <Text fontSize="2xl" as="i" pb="20px">
                Intellectual Property
              </Text>
              <Text fontSize="lg">
                PECF and/or its related companies own all the intellectual
                property rights over its sites, all its content, services,
                products, trademarks, trade names, logos, designs, images,
                advertising phrases, copyrights, domains, computer programs,
                codes, developments, software, databases, information,
                technology, patents and models of utility, industrial designs
                and models, trade secrets, among others (“Intellectual
                Property”) and are protected by national and international laws.
                Although PECF grants permission to use its products and services
                as provided in the Terms and Conditions, this does not imply an
                authorization to use your Intellectual Property, except prior
                and express consent of PECF and/or its related companies. In any
                event, vendor users using such products and services may not use
                the PECF Intellectual Property in a manner that causes public
                confusion. and must carry out their commercial activity under a
                brand or own and distinctive trade name, which is not to be
                confused with the PECF brand and its family of “Market” brands.
                It is forbidden to use our products or services for illegal
                purposes, make any type of reverse engineering or derivative
                works, use search tools or extraction of data and content of our
                platform for reuse and/or create databases own that include all
                or part of our content without our express authorization. It is
                also prohibited to use improperly, without authorization and/or
                contrary to current regulations and/or that generates confusion
                or implies denigrating use and/or that causes prejudice, damages
                or losses to PECF and/or its companies related. The use of PECF
                products and services nor does it imply authorization to use
                intellectual property of third parties that may be involved,
                whose use will be under sole responsibility of the user. In case
                a person User or any publication infringes the Intellectual
                Property of PECF or third parties, PECF may remove said
                publication totally or partially, penalize the user in
                accordance with the provisions of these Terms and Conditions and
                exercise extrajudicial actions and/or corresponding judicial.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
