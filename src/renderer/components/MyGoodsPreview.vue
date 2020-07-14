<template>
  <webview
    id="webview"
    :src="url"
    useragent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
  ></webview>
</template>
<script>
export default {
   props: ['url'],
  name: "my-goods-preview",
  data() {
    return {
      // url:
      //   "https://uland.taobao.com/coupon/edetail?e=7G6mxC%2BrhetD6TM1M2v5G5gL830D0%2Bo0BlfZwKeRm03P%2FyQcW%2Bv%2Blq4FIH%2BquyFXNifMOHuzOvvRTDMIMLZCOjEhJpUUrcnYS%2FRCwAKeMjJTTQfuubbsiHY9x3IctcCWLspxGy3zBjY8IeN8lvhRA2lzrR4%2Bfrcbv3I96aYveISWbumvlaSDnY3S7fLma%2Bnj6tL30WUw5ME%3D&traceId=0b0cc5e915945640864304141e33f1&union_lens=lensId:TAPI@1594564086@0b5797e2_0daf_173436d0ad4_c895@01&xId=3i8RlyhazfUeMynKYWHUnKQOPtezF0HsupZcmdZA7grtLO1DSqc6CRgKlGIWyCcoM8VIl4c2RNGChbpQ7h8n5eKum5NHx6nOfXGcxDi6fWk4&activityId=3b2d5e2ff5a74cabb4e2d5dc9e3588c5&relationId=2266932657&un=9eaeda65f5ba92f7acb7a888e4a1d6ac&share_crt_v=1&ut_sk=1.utdid_23383535_1594564086596.TaoPassword-Outside.taoketop&spm=a2159r.13376465.0.0&sp_tk=77+lMUlsZDF5TkZ5aXnvv6U=&bxsign=tcd1594641326380c6e4663b1abee9b49f58d56e474f95f4"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>