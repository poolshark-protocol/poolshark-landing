import * as React from "react"
const Range = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={174}
    height={192}
    fill="none"
    {...props}
  >
    <path
      fill="#0B0C0C"
      stroke="#2C2E33"
      d="M170.953 1.15H2.993A2.257 2.257 0 0 0 .74 3.41v82.756c0 1.249 1.01 2.26 2.254 2.26h167.96a2.257 2.257 0 0 0 2.253-2.26V3.41a2.257 2.257 0 0 0-2.253-2.26Z"
    />
    <path
      fill="#646364"
      d="M57.037 25.423V17.88h1.216l.783 2.439c.075.22.144.44.206.661.062.214.107.38.134.496.034-.117.079-.282.134-.496.055-.22.117-.444.185-.672l.742-2.428h1.216v7.544h-.907v-2.739c0-.303.01-.647.031-1.033.02-.386.048-.779.083-1.178.034-.407.068-.793.103-1.158.04-.372.075-.696.103-.971l-1.216 3.772h-.979l-1.226-3.772a39.242 39.242 0 0 1 .196 2.067c.027.393.051.785.072 1.178.02.393.03.758.03 1.095v2.74h-.906Zm6.477 0v-.847h1.535v-5.85h-1.535v-.847h4.018v.847h-1.535v5.85h1.535v.847h-4.018Zm6.023 0V17.88h1.237l2.297 6.459-.051-.63c-.014-.255-.028-.52-.041-.796-.007-.283-.01-.548-.01-.796v-4.237h.896v7.544h-1.237l-2.287-6.46a25.6 25.6 0 0 1 .072 1.427c.014.276.02.54.02.796v4.237h-.896Zm12.377 0V17.88h2.42c.468 0 .873.093 1.217.279.344.179.608.434.793.765.193.33.288.723.288 1.178 0 .448-.095.84-.288 1.178-.185.33-.45.589-.793.775-.344.18-.749.269-1.216.269H82.84v3.1h-.927Zm.927-3.937h1.494c.406 0 .728-.124.968-.373.248-.254.371-.592.371-1.012 0-.427-.123-.765-.37-1.013-.24-.248-.563-.372-.97-.372h-1.493v2.77Zm5.25 3.937V17.88h2.33c.446 0 .837.093 1.174.279.337.179.597.43.783.754.185.324.278.703.278 1.137 0 .51-.134.947-.402 1.313-.26.365-.618.616-1.071.754l1.576 3.307h-1.092l-1.442-3.204h-1.206v3.204h-.927Zm.928-4.04h1.401c.385 0 .694-.121.928-.363.233-.247.35-.571.35-.97 0-.407-.117-.731-.35-.972-.234-.241-.543-.362-.928-.362h-1.4v2.666Zm5.385 4.04v-.847h1.535v-5.85h-1.535v-.847h4.018v.847h-1.535v5.85h1.535v.847h-4.018Zm8.228.104c-.453 0-.848-.087-1.185-.259a1.872 1.872 0 0 1-.772-.744c-.179-.33-.268-.72-.268-1.168v-3.41c0-.455.089-.844.268-1.168.185-.324.443-.572.772-.744.337-.172.732-.259 1.185-.259.454 0 .845.09 1.175.27.33.171.583.42.762.743.179.324.268.71.268 1.158h-.927c0-.427-.113-.755-.34-.982-.22-.234-.533-.351-.938-.351-.405 0-.725.113-.958.34-.227.228-.34.555-.34.982v3.421c0 .427.113.758.34.992.233.228.553.341.958.341.405 0 .718-.113.938-.34.227-.235.34-.566.34-.993h.927c0 .441-.089.827-.268 1.158a1.873 1.873 0 0 1-.762.754c-.33.172-.721.258-1.175.258Zm4.076-.104V17.88h4.327v.847h-3.41v2.336h3.05v.837h-3.05v2.677h3.41v.847h-4.327Z"
    />
    <path
      fill="#fff"
      d="M65.915 62.575c-1.036 0-1.94-.202-2.712-.605a4.44 4.44 0 0 1-1.762-1.744c-.417-.76-.626-1.643-.626-2.65v-7.442c0-1.023.209-1.907.626-2.65a4.289 4.289 0 0 1 1.762-1.721c.772-.419 1.676-.628 2.712-.628 1.05 0 1.955.209 2.712.628a4.288 4.288 0 0 1 1.762 1.72c.417.745.626 1.628.626 2.651v7.441c0 1.008-.209 1.892-.626 2.651a4.402 4.402 0 0 1-1.785 1.744c-.757.403-1.654.605-2.69.605Zm0-1.79c.927 0 1.669-.295 2.225-.884.572-.605.858-1.38.858-2.326v-7.44c0-.946-.286-1.714-.858-2.303-.556-.604-1.298-.907-2.225-.907-.928 0-1.677.303-2.249.907-.556.59-.834 1.357-.834 2.302v7.441c0 .946.278 1.721.834 2.326.572.589 1.322.883 2.249.883Zm0-5.558c-.418 0-.758-.132-1.02-.396-.248-.263-.371-.612-.371-1.046 0-.418.123-.752.37-1 .263-.263.603-.395 1.02-.395.418 0 .75.132.998.395.262.248.394.582.394 1 0 .434-.132.783-.394 1.046-.248.264-.58.396-.997.396Zm13.9 7.348c-.587 0-1.058-.17-1.414-.512-.34-.34-.51-.798-.51-1.372 0-.604.17-1.085.51-1.441.356-.357.827-.535 1.414-.535.588 0 1.051.178 1.391.535.356.356.533.837.533 1.441 0 .574-.177 1.031-.533 1.372-.34.341-.803.512-1.39.512Zm11.281-.233 4.799-7.72-.093-.07a2.842 2.842 0 0 1-1.205 1 4.09 4.09 0 0 1-1.716.35c-.912 0-1.715-.218-2.41-.652-.68-.434-1.206-1.046-1.577-1.837-.371-.806-.557-1.744-.557-2.814 0-1.1.224-2.054.673-2.86a4.737 4.737 0 0 1 1.877-1.907c.804-.465 1.74-.697 2.806-.697 1.081 0 2.024.232 2.828.697a4.698 4.698 0 0 1 1.9 1.907c.449.806.673 1.76.673 2.86 0 .853-.124 1.69-.37 2.512a9.03 9.03 0 0 1-1.067 2.372l-4.243 6.86h-2.318Zm2.62-8.138c.989 0 1.785-.326 2.388-.977.602-.667.904-1.542.904-2.628 0-1.085-.302-1.953-.904-2.604-.603-.667-1.4-1-2.388-1-.99 0-1.785.333-2.388 1-.603.651-.904 1.52-.904 2.604 0 1.086.301 1.961.904 2.628.603.651 1.399.977 2.388.977Zm11.281 8.138 4.798-7.72-.092-.07a2.846 2.846 0 0 1-1.206 1 4.09 4.09 0 0 1-1.715.35c-.912 0-1.716-.218-2.411-.652-.68-.434-1.206-1.046-1.577-1.837-.371-.806-.556-1.744-.556-2.814 0-1.1.224-2.054.672-2.86a4.734 4.734 0 0 1 1.878-1.907c.804-.465 1.739-.697 2.805-.697 1.082 0 2.025.232 2.828.697a4.697 4.697 0 0 1 1.901 1.907c.448.806.673 1.76.673 2.86 0 .853-.124 1.69-.371 2.512a9.04 9.04 0 0 1-1.067 2.372l-4.242 6.86h-2.318Zm2.619-8.138c.989 0 1.785-.326 2.388-.977.603-.667.904-1.542.904-2.628 0-1.085-.301-1.953-.904-2.604-.603-.667-1.399-1-2.388-1-.989 0-1.785.333-2.388 1-.602.651-.904 1.52-.904 2.604 0 1.086.302 1.961.904 2.628.603.651 1.399.977 2.388.977Z"
    />
    <path
      fill="#0B0C0C"
      stroke="#2C2E33"
      d="M170.974 103.812H3.014a2.258 2.258 0 0 0-2.253 2.261v82.756a2.257 2.257 0 0 0 2.254 2.261h167.959a2.257 2.257 0 0 0 2.254-2.261v-82.756a2.258 2.258 0 0 0-2.254-2.261Z"
    />
    <path
      fill="#646364"
      d="M57.743 128.087v-7.545h1.215l.784 2.439c.075.221.144.441.206.662.061.213.106.379.133.496.035-.117.08-.283.134-.496.055-.221.117-.445.186-.672l.742-2.429h1.216v7.545h-.907v-2.739c0-.303.01-.648.03-1.033.021-.386.05-.779.083-1.179.034-.406.07-.792.103-1.157a93.2 93.2 0 0 0 .103-.972l-1.215 3.773h-.98l-1.225-3.773a40.81 40.81 0 0 1 .196 2.067c.027.393.05.786.071 1.179.021.392.031.757.031 1.095v2.739h-.906Zm5.91 0 1.958-7.545h1.246l1.948 7.545h-.938l-.495-2.005h-2.277l-.494 2.005h-.948Zm1.628-2.791h1.896l-.577-2.325c-.11-.441-.196-.81-.258-1.106a13.73 13.73 0 0 1-.113-.579c-.014.09-.052.283-.114.579a28.17 28.17 0 0 1-.257 1.096l-.577 2.335Zm4.446 2.791 2.164-3.824-2.05-3.721h1.071l1.164 2.233c.062.117.124.244.186.382l.165.31c.035-.076.082-.179.144-.31.069-.138.134-.265.196-.382l1.185-2.233h1.02l-2.05 3.659 2.163 3.886h-1.061l-1.288-2.398-.196-.372c-.062-.138-.11-.248-.144-.331-.034.083-.086.19-.155.321a9.216 9.216 0 0 1-.185.372l-1.298 2.408h-1.03Zm12.892 0v-7.545h2.422c.466 0 .872.093 1.216.279.343.179.607.434.793.765.192.331.288.724.288 1.178 0 .448-.096.841-.288 1.178-.186.331-.45.59-.793.776-.344.179-.75.268-1.216.268h-1.494v3.101h-.928Zm.928-3.938h1.494c.405 0 .728-.124.968-.372.248-.255.371-.592.371-1.013 0-.427-.123-.764-.37-1.013-.241-.248-.564-.372-.97-.372h-1.493v2.77Zm5.25 3.938v-7.545h2.33c.445 0 .837.093 1.174.279.336.179.597.431.783.755.185.324.278.703.278 1.137 0 .509-.134.947-.402 1.312a1.99 1.99 0 0 1-1.072.755l1.577 3.307h-1.092l-1.443-3.204h-1.205v3.204h-.927Zm.928-4.041h1.401c.384 0 .694-.121.927-.362.234-.248.35-.572.35-.971 0-.407-.117-.731-.35-.972-.233-.241-.543-.362-.927-.362h-1.401v2.667Zm5.384 4.041v-.848h1.535v-5.849H95.11v-.848h4.018v.848h-1.535v5.849h1.535v.848H95.11Zm8.228.103c-.453 0-.848-.086-1.184-.258a1.878 1.878 0 0 1-.773-.744c-.179-.331-.268-.72-.268-1.168v-3.411c0-.454.089-.844.268-1.168.185-.323.443-.571.773-.744.336-.172.731-.258 1.184-.258.454 0 .845.09 1.175.269.33.172.584.42.762.744.179.324.268.709.268 1.157h-.927c0-.427-.113-.754-.34-.982-.22-.234-.532-.351-.938-.351-.405 0-.724.114-.958.341-.226.228-.34.555-.34.982v3.421c0 .427.114.758.34.992.234.227.553.341.958.341.406 0 .718-.114.938-.341.227-.234.34-.565.34-.992h.927c0 .441-.089.827-.268 1.157a1.866 1.866 0 0 1-.762.755c-.33.172-.721.258-1.175.258Zm4.077-.103v-7.545h4.327v.848h-3.41v2.335h3.049v.838h-3.049v2.676h3.41v.848h-4.327Z"
    />
    <path
      fill="#fff"
      d="M61.069 165.005v-1.907h4.59v-13.324l-4.59 3.441v-2.325l3.825-2.86h2.851v15.068h3.756v1.907H61.069Zm18.768.232c-.587 0-1.059-.17-1.414-.511-.34-.341-.51-.799-.51-1.372 0-.605.17-1.085.51-1.442.355-.356.827-.535 1.414-.535s1.05.179 1.39.535c.356.357.534.837.534 1.442 0 .573-.178 1.031-.533 1.372-.34.341-.804.511-1.391.511Zm13.9 0c-1.035 0-1.94-.201-2.712-.604a4.445 4.445 0 0 1-1.762-1.744c-.417-.76-.626-1.643-.626-2.651v-7.441c0-1.023.209-1.907.626-2.651a4.29 4.29 0 0 1 1.762-1.721c.773-.418 1.677-.628 2.712-.628 1.051 0 1.956.21 2.713.628a4.29 4.29 0 0 1 1.762 1.721c.417.744.626 1.628.626 2.651v7.441c0 1.008-.21 1.891-.626 2.651a4.407 4.407 0 0 1-1.785 1.744c-.758.403-1.654.604-2.69.604Zm0-1.79c.928 0 1.67-.295 2.226-.884.572-.604.858-1.379.858-2.325v-7.441c0-.946-.286-1.713-.858-2.302-.556-.605-1.298-.907-2.226-.907-.927 0-1.676.302-2.248.907-.557.589-.835 1.356-.835 2.302v7.441c0 .946.278 1.721.835 2.325.572.589 1.321.884 2.248.884Zm0-5.558c-.417 0-.757-.131-1.02-.395-.247-.263-.37-.612-.37-1.046 0-.419.123-.752.37-1 .263-.264.603-.396 1.02-.396.418 0 .75.132.997.396.263.248.394.581.394 1 0 .434-.131.783-.394 1.046-.247.264-.58.395-.997.395Zm9.079 7.116v-2.139l5.17-5.511c.881-.946 1.522-1.783 1.924-2.512.402-.744.603-1.457.603-2.139 0-.946-.263-1.69-.789-2.232-.51-.543-1.213-.814-2.109-.814-.989 0-1.77.279-2.342.837-.556.558-.834 1.325-.834 2.302h-2.087c.031-1.023.263-1.907.696-2.651a4.506 4.506 0 0 1 1.831-1.744c.788-.403 1.7-.605 2.736-.605 1.02 0 1.901.202 2.643.605a4.044 4.044 0 0 1 1.738 1.674c.402.729.603 1.597.603 2.605 0 .961-.255 1.914-.765 2.86-.51.945-1.345 2.023-2.504 3.232l-4.173 4.325h7.72v1.907h-10.061Z"
    />
  </svg>
)
export default Range