export function condition(condition) {
   switch (condition) {
      case 'storm':
         return icon = {
            name: 'thunderstorm-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'snow':
         return icon = {
            name: 'snow-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'rain':
         return icon = {
            name: 'rainy-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'clear_day':
         return icon = {
            name: 'sunny-outline',
            color: '#ffb300',
            headerColor: '#ffb300'
         };
      case 'clear_night':
         return icon = {
            name: 'moon-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'cloud':
         return icon = {
            name: 'cloud-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'cloudly_day':
         return icon = {
            name: 'partly-sunny-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      case 'cloudly_night':
         return icon = {
            name: 'cloudly-night-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
      default:
         return icon = {
            name: 'cloud-outline',
            color: '#1ec9ff',
            headerColor: '#fff'
         };
   }
}