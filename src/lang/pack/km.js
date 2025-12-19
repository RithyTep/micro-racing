import {
  ERROR_CODES,
  ROOM_SERVER_MESSAGES_TYPES,
} from '../../network/constants/serverCodes';

export default {
  editor: {
    titles: {
      save: 'រក្សាទុក',
      load: 'ផ្ទុក',
    },
  },
  game: {
    shared: {
      loading: 'កំពុងផ្ទុក...',
    },
    errors: {
      [ERROR_CODES.ROOM_FULL]: 'បន្ទប់ពេញហើយ!',
      [ERROR_CODES.ROOM_ALREADY_EXISTS]: 'បន្ទប់មានរួចហើយ!',
      [ERROR_CODES.ALREADY_KICKED]: 'ត្រូវបានហាមឃាត់!',
      [ERROR_CODES.ACCESS_DENIED]: 'ការចូលត្រូវបានបដិសេធ!',
      [ERROR_CODES.UNEXPECTED_ERROR]: 'កំហុសមិនរំពឹងទុក!',
      [ERROR_CODES.RACING_ALREADY_ACTIVE]: 'ការប្រណាំងកំពុងដំណើរការ!',
      undefined: 'កំហុសមិនបានកំណត់!',
    },
    screens: {
      loading: {
        header: 'កំពុងភ្ជាប់...',
      },

      choose_config: {
        headers: {
          car: 'ជ្រើសរើសរថយន្ត',
          nick: 'ជ្រើសរើសឈ្មោះហៅក្រៅ',
        },
        play: 'លេង',
        start_race: 'ចាប់ផ្តើមប្រណាំង!',
        update: 'ធ្វើបច្ចុប្បន្នភាព',
        sending: 'កំពុងផ្ញើ...',
      },

      rooms_list: {
        header: 'បញ្ជីបន្ទប់',
        create_room: 'បង្កើតបន្ទប់',
        creating_room: 'កំពុងបង្កើតបន្ទប់',
      },

      score: {
        header: 'ពិន្ទុ',
        next_button: 'បន្ទាប់',
        columns: {
          position: 'ទីតាំង',
          kind: 'ប្រភេទ',
          nick: 'ឈ្មោះហៅក្រៅ',
          nth_lap_time: 'ជុំទី %{}',
          total_time: 'ពេលវេលាប្រណាំង',
        },
      },

      room_edit: {
        header: 'បន្ទប់:',
        predefined_maps: 'ជ្រើសរើសផ្លូវផ្សេងទៀត:',
        leave: 'ចាកចេញពីបន្ទប់',
        edit_road: 'កែសម្រួលផ្លូវ',
        save_road: 'ប្រើផ្លូវ',
        discard_road: 'បោះបង់ផ្លូវ',
        stop_race: 'បញ្ឈប់ការប្រណាំង',

        tabs: {
          score: 'ពិន្ទុ',
          chat: 'ជជែក',
          players: 'អ្នកលេង',
          banned: 'បានហាមឃាត់',
          settings: 'ការកំណត់',
        },

        players_list: {
          ops: 'អ្នកគ្រប់គ្រង:',
          in_race: 'អ្នកលេង:',
          observers: 'អ្នកមើល:',
        },

        banned_list: {
          list_title: 'បានហាមឃាត់:',
          no_banned: 'គ្មានអ្នកត្រូវបានហាមឃាត់ទេ :)',
          unban: 'ដកការហាមឃាត់',
        },

        race_config: {
          players_count: 'ចំនួនអ្នកលេង:',
          laps_count: 'ចំនួនជុំ:',
          countdown: 'រាប់ថយក្រោយ (វិនាទី):',
          spawn_bots: 'បង្កើតរ៉ូបូត',
        },

        score_list: {
          header: 'ពិន្ទុ',
        },
      },

      racing: {
        leave_room: 'ចាកចេញពីបន្ទប់',
        stop_racing: 'បញ្ឈប់ការប្រណាំង',
      },

      chat: {
        type_message: 'វាយសារ...',
        send: 'ផ្ញើ',

        server_nick: 'ម៉ាស៊ីនមេ',
        server_messages: {
          [ROOM_SERVER_MESSAGES_TYPES.PLAYER_CREATED_ROOM]: '%{} បានបង្កើតបន្ទប់!',
          [ROOM_SERVER_MESSAGES_TYPES.PLAYER_JOIN]: 'អ្នកលេង %{} បានចូល!',
          [ROOM_SERVER_MESSAGES_TYPES.PLAYER_LEFT]: 'អ្នកលេង %{} បានចាកចេញ!',
          [ROOM_SERVER_MESSAGES_TYPES.PLAYER_KICK]: 'អ្នកលេង %{} ត្រូវបានបណ្តេញចេញ!',
          [ROOM_SERVER_MESSAGES_TYPES.PLAYER_RENAME]: 'អ្នកលេង %{} បានប្តូរឈ្មោះទៅ %{}!',
        },
      },
    },

    keyboard: {
      controls: 'ការបញ្ជា',
      throttle: 'បន្ថែមល្បឿន',
      brake: 'ហ្វ្រាំង',
      turnLeft: 'បត់ឆ្វេង',
      turnRight: 'បត់ស្តាំ',
    },

    racing: {
      current_lap: 'ជុំ:',
      race_starts_in: 'ការប្រណាំងនឹងចាប់ផ្តើមក្នុង %{} វិនាទី!',
      waiting_for_server: 'កំពុងផ្ទុក...',
    },
  },
};
