import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.page}>
      <Image source={require('@/assets/images/profile.jpg')} style={styles.pic} />

      <Text style={styles.name}>ภูริทัต มิกขุนทด</Text>
      <Text style={styles.quote}>ล้มได้ แต่ต้องลุกขึ้นสู้ใหม่เสมอ</Text>

      <View style={styles.card}>
        <Text style={styles.info}>ห้อง BTI.1/5 เลขที่ 15</Text>
        <Text style={styles.info}>Email: pooritat.mikkhuntod@e-tech.ac.th</Text>
        <Text style={styles.info}>Phone: 0639657772</Text>
      </View>

      <Text style={styles.title}>ภาพกิจกรรม</Text>

      <View style={styles.row}>
        <Image source={{ uri: 'https://picsum.photos/id/1015/200' }} style={styles.photo} />
        <Image source={{ uri: 'https://picsum.photos/id/1018/200' }} style={styles.photo} />
        <Image source={{ uri: 'https://picsum.photos/id/1016/200' }} style={styles.photo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1, // ยืดเต็มหน้าจอ
    backgroundColor: '#fdf6f0', // พื้นหลังสีครีมอ่อน
    alignItems: 'center', // จัดลูกกึ่งกลางแนวนอน
    paddingTop: 100, // เว้นระยะด้านบน
    paddingHorizontal: 24, // เว้นระยะซ้าย-ขวา
  },
  pic: {
    width: 150,
    height: 150,
    borderRadius: 75, // ครึ่งหนึ่งของความกว้าง = วงกลม
    borderWidth: 4, // ความหนาขอบรูป
    borderColor: '#b8d8f0', // ฟ้าพาสเทล
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6b5b7b', // ม่วงเทาอ่อน
    marginTop: 16, // เว้นระยะจากรูปด้านบน
  },
  quote: {
    fontSize: 12,
    color: '#a89bb5', // ม่วงพาสเทล
    fontStyle: 'italic',
    marginTop: 4, // เว้นระยะจากชื่อด้านบน
  },
  card: {
    alignSelf: 'stretch', // ขยายเต็มความกว้าง
    backgroundColor: '#e3f1e8', // เขียวมิ้นต์อ่อน
    borderRadius: 12, // มุมโค้งของการ์ด
    padding: 16, // เว้นระยะขอบด้านในทุกด้าน
    marginTop: 24, // เว้นระยะจากคำคมด้านบน
    // เงา iOS
    shadowColor: '#b8c9bd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // เงา Android
    elevation: 3,
  },
  info: {
    fontSize: 14,
    color: '#5f7a6a', // เขียวเทา
    marginBottom: 4, // เว้นระยะด้านล่างแต่ละบรรทัด
  },
  title: {
    alignSelf: 'flex-start', // ชิดซ้าย
    fontSize: 16,
    color: '#d48a9e', // ชมพูพาสเทล
    fontWeight: 'bold',
    marginTop: 24, // เว้นระยะจากการ์ดด้านบน
  },
  row: {
    flexDirection: 'row', // เรียงซ้ายไปขวา
    justifyContent: 'space-between', // กระจายรูปให้ช่องว่างเท่ากัน
    alignSelf: 'stretch',
    marginTop: 12, // เว้นระยะจากหัวข้อด้านบน
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8, // มุมโค้งของรูป
  },
});
