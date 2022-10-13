<template>
  <v-row>
    <v-col cols="12" sm="7">
      <v-row>
        <v-col cols="12" class="mb-6">
          <div class="text-20 mb-4">
            Create an account
          </div>
          <v-card color="background--lighten rounded-lg" flat class="pa-5 d-flex justify-center">
            <v-row>
              <v-col
                cols="12"
              >
              <div class="d-flex flex-column">
                <div class="mb-2">Your Email Address</div>
                <v-text-field
                  hide-details="auto"
                  v-model="email"
                  outlined
                ></v-text-field>
                <div>
                  <v-checkbox
                    v-model="receiveUpdate"
                    color="primary"
                    class="white--text"
                    dark
                    label="I want to receive product updates and information from Poliigon"
                  ></v-checkbox>
                </div>
              </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="text-20 mb-4">
            Select a payment method
          </div>
          <v-card color="background--lighten rounded-lg" flat class="d-flex justify-center">
            <v-row>
              <v-col
                cols="12"
              >
                <div class="d-flex flex-column">
                  <v-radio-group 
                    v-model="selectedPaymentMethod" 
                    mandatory
                    hide-details="auto"
                  >
                    <div class="px-5 py-2">
                      <div class="mb-6 d-flex flex-column flex-lg-row">
                        <v-radio
                          :value="paymentMethods[0]"
                        >
                          <template v-slot:label>
                            <div class="d-flex align-center">
                              <span class="mx-2 text-no-wrap">Credit or debit card</span>
                            </div>
                          </template>
                        </v-radio>
                        <div class="d-flex flex-row">
                          <div class="background--lighten-2 py-1 px-2 radius-6 mx-1">
                            <img src="~/assets/images/visa.svg" width="36" height="20" alt="">
                          </div>
                          <div class="background--lighten-2 py-1 px-2 radius-6 mx-1">
                            <img src="~/assets/images/masterCard.svg" width="36" height="20" alt="">
                          </div>
                          <div class="d-flex radius-6 mx-1">
                            <img src="~/assets/images/unionpay.svg" width="52" height="32" alt="">
                          </div>
                          <div class="background--lighten-2 py-1 px-2 radius-6 mx-1">
                            <img src="~/assets/images/amex.svg" width="36" height="20" alt="">
                          </div>
                          <div class="background--lighten-2 py-1 px-2 radius-6 mx-1">
                            <img src="~/assets/images/jcb.svg" width="36" height="20" alt="">
                          </div>
                        </div>
                      </div>
                      <v-row v-if="selectedPaymentMethod === paymentMethods[0]">
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">First Name</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="firstName"
                              placeholder="First Name"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">Last Name</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="lastName"
                              placeholder="Last Name"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">Card Number</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="cardNumber"
                              placeholder="1234 1234 1234 1234"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">Expiration Date</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="expirationDate"
                              placeholder="MM / YY"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">CVV</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="CVV"
                              placeholder="CVV"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div class="mb-2">Post Code</div>
                            <v-text-field
                              hide-details="auto"
                              v-model="postCode"
                              placeholder="Post Code"
                              outlined
                            ></v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <div>
                            <v-checkbox
                              v-model="saveCardDetail"
                              color="primary"
                              class="white--text"
                              dark
                              label="Save my card details for future purchases"
                            ></v-checkbox>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <div class="text-14 grey--text">
                            <div>
                              This purchase is <nuxt-link to="" class="white--text">licensed only for individual artists</nuxt-link> earning up to $150K USD revenue per year.
                            </div>
                            <div>
                              By completing this purchase you confirm you have read and agree to our <nuxt-link to="" class="white--text">Terms</nuxt-link> & <nuxt-link to="" class="white--text">Privacy Policy</nuxt-link>.
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <v-btn color="primary" rounded x-large>
                            <div class="mx-4">
                              <v-icon
                                left
                                dark
                              >
                                mdi-shield-check-outline
                              </v-icon>
                              Checkout Securely
                            </div>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>

                    <div class="my-5">
                      <v-divider ></v-divider>
                    </div>

                    <div class="px-5 py-5">
                      <div class="mb-10 d-flex flex-column flex-md-row">
                        <v-radio
                          :value="paymentMethods[1]"
                        >
                          <template v-slot:label>
                            <div class="d-flex align-center">
                              <span class="mx-2 text-no-wrap">PayPal</span>
                            </div>
                          </template>
                        </v-radio>
                        <div class="d-flex flex-row">
                          <div class="background--lighten-2 py-1 px-2 radius-6 mx-1">
                            <img src="~/assets/images/paypal.svg" width="36" height="20" alt="">
                          </div>
                        </div>
                      </div>
                      <div v-if="selectedPaymentMethod === paymentMethods[1]">
                        <div>
                          You will be redirected to PayPal to complete your purchase
                        </div>
                        <div>
                          <v-checkbox
                            v-model="saveCardDetail"
                            color="primary"
                            class="white--text"
                            dark
                            label="Save my PayPal details for future purchases"
                          ></v-checkbox>
                        </div>
                        <div class="text-14 grey--text mb-6">
                          <div>
                            This purchase is <nuxt-link to="" class="white--text">licensed only for individual artists</nuxt-link> earning up to $150K USD revenue per year.
                          </div>
                          <div>
                            By completing this purchase you confirm you have read and agree to our <nuxt-link to="" class="white--text">Terms</nuxt-link> & <nuxt-link to="" class="white--text">Privacy Policy</nuxt-link>.
                          </div>
                        </div>
                        <div>
                          <v-btn color="primary" rounded x-large>
                            <div class="mx-4">
                              Continue to PayPal
                            </div>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-radio-group>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!-- <v-col class="d-xs-none d-sm-none d-md-block" md="1">
    </v-col> -->

    <v-col cols="12" sm="5" class="mb-6">
      <div class="text-20 mb-4">
        Order Summary
      </div>
      <v-card color="background--lighten rounded-lg" flat class="pa-5 d-flex flex-column justify-center">
        <div class="">
          <div class="d-flex justify-space-between w-full mb-2">
            <span>Textures (2)</span>
            <span class="grey--text">$25.00</span>
          </div>
          <div class="d-flex justify-space-between w-full">
            <span>Models (3)</span>
            <span class="grey--text">$74.00</span>
          </div>
        </div>
        <v-divider class="my-6"></v-divider>
        <div class="">
          <div class="d-flex justify-space-between w-full mb-2">
            <span><span class="grey--text">Tax Country: </span><span class="text-decoration-underline">Australia</span></span>
          </div>
          <div class="d-flex justify-space-between w-full grey--text">
            <span>GST 10%</span>
            <span>$1.00</span>
          </div>
        </div>
        <v-divider class="my-6"></v-divider>
        <div>
          <div class="d-flex justify-space-between w-full">
            <span class="text-18">Today's Total</span>
            <span>$100.00 AUD</span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      cardNumber: '',
      expirationDate: '',
      CVV: '',
      postCode: '',
      receiveUpdate: false,
      paymentMethods: ['Credit Cards', 'PayPal'],
      selectedPaymentMethod: 'Credit Cards',
      saveCardDetail: false,

    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
