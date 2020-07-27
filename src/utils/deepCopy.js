import rfdc from 'rfdc';

export default function deepCopy(thingToClone) {
  return rfdc()(thingToClone);
}
